# QST Docker

[QST (Quiz/Survey/Test)](https://sourceforge.net/projects/qstonline/) in a Docker container.

## Usage

`docker-compose.yml`:
```yaml
version: '3'
services:
  app:
    container_name: qst
    image: elquimista/qst:3.11.01
    restart: unless-stopped
    depends_on:
      - db
    environment:
      - DB_HOST=db
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
docker-compose build
docker tag qst-app:latest elquimista/qst:<new_version>
docker push elquimista/qst:<new_version>
```
