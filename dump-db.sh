#!/bin/sh

MYSQL_PWD="$DB_ROOT_PASSWORD" mysqldump -h$DB_HOST -u root $DB_NAME
