# QST Docker

[QST (Quiz/Survey/Test)](https://sourceforge.net/projects/qstonline/) in a Docker container.

## Usage

`compose.yaml`:
```yaml
services:
  app:
    container_name: qst
    image: elquimista/qst:3.12.09
    restart: unless-stopped
    volumes:
      - ./qst_files:/var/www/qst/schools/qst_files
      - ./db_data:/var/lib/mysql
    ports:
      - 127.0.0.1:8080:80
```

Start the container:

```sh
docker compose up -d
```

Now QST is accessible at http://localhost:8080.

Default administrator login credentials: `admin:qstcaptain`

## Development

### Upgrading QST version

Download [qst_linux_mac.zip](https://sourceforge.net/projects/qstonline/files/qst_linux_mac.zip/download)
from QST's canonical repository, unzip it and replace it with `qst_linux` folder
in this git repository.

And then commit, tag, push (with tags), publish a new release from that tag.
It will trigger GitHub Actions pipeline which will automatically build a new Docker image and push it to the [default Docker repository](https://hub.docker.com).
