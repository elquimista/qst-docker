#!/bin/sh

MYSQL_PWD="$DB_PASSWORD" mysql -h$DB_HOST -u$DB_USER $DB_NAME "$@"
