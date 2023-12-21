#!/bin/sh

mysql -h$DB_HOST -u$DB_USER -p$DB_PASSWORD $DB_NAME < /temp/qst.sql
