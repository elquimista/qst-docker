#!/bin/sh

mysql -h$DB_HOST -u$DB_USER -p$DB_PASSWORD $DB_NAME < /var/www/qst/schools/qst_files/qst.sql
