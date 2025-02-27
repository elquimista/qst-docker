# QST Docker

[QST (Quiz/Survey/Test)](https://sourceforge.net/projects/qstonline/) in a Docker container.

## Usage

`docker-compose.yml`:
```yaml
version: '3'
services:
  app:
    container_name: qst
    image: elquimista/qst:3.12.07
    restart: unless-stopped
    depends_on:
      - db
    environment:
      - DB_HOST=db
      - DB_ROOT_PASSWORD=Qst#captain2root
      - DB_USER=qst
      - DB_PASSWORD=Qst#captain2
      - DB_DATABASE=qst
    volumes:
      - ./qst_files:/var/www/qst/schools/qst_files
    ports:
      - 127.0.0.1:8080:80

  db:
    image: mysql:8.2.0
    restart: unless-stopped
    environment:
      - MYSQL_ROOT_PASSWORD=Qst#captain2root
      - MYSQL_USER=qst
      - MYSQL_PASSWORD=Qst#captain2
      - MYSQL_DATABASE=qst
    volumes:
      - ./db_data:/var/lib/mysql
```

Start the container and initialize the database schema:

```sh
docker-compose up -d
docker-compose exec app init-db
```

Now QST is accessible at http://localhost:8080.

If you want to start a new container completely from scratch and want to retain
the existing database, this Docker image has two commands available:

```sh
docker exec qst dump-db > qst.sql
docker exec -i qst restore-db -t < qst.sql
```

Run `dump-db` command before deleting database container (e.g., before running
`docker-compose down`).
Similarly, run `restore-db` command after running `docker-compose up -d`.

You might wonder why these extra commands are needed when we can simply reuse
Docker volume (`db_data` folder as shown in the sample `docker-compose.yml`).
Good question! I tried it and it doesn't work unfortunately in this specific
case. Perl's DBI module (or could it be Apache?) complaints about some secure
connection error and I couldn't figure it out why. So the above approach is more
like a workaround for now. Exact error message says:

```
DBI connect (...) failed: Authentication plugin 'caching_sha2_password' reported error: Authentication requires secure connection. at /home/MyApache2/QST.pm line 67.
```

## Development

### Upgrading QST version

Download [qst_linux_mac.zip](https://sourceforge.net/projects/qstonline/files/qst_linux_mac.zip/download)
from QST's canonical repository, unzip it and replace it with `qst_linux` folder
in this git repository.

Change the hardcoded database connection details as follows:

`startup.pl`:
```perl
Apache::DBI->connect_on_init
 ("DBI:mysql:$ENV{DB_NAME}:$ENV{DB_HOST}",
   $ENV{DB_USER},
   $ENV{DB_PASSWORD},
   {
    ...
```

`QST.pm`:
```perl
my $dbh = DBI->connect("DBI:mysql:database=$ENV{DB_NAME};host=$ENV{DB_HOST}",$ENV{DB_USER}, $ENV{DB_PASSWORD},{RaiseError => 0,PrintError => 1,AutoCommit => 1});
```

And then build a new Docker image:

```sh
docker buildx create --use --platform=linux/amd64,linux/arm64
docker buildx build --platform linux/amd64,linux/arm64 --push -t elquimista/qst:<new_version> .
```

Or simply make a new git tag and make a new release on GitHub accordingly and deployment to Docker Hub will be automatically done.

```sh
git tag 3.12.07
git push --tags origin main
```
