#!/bin/sh

mysqldump -h$DB_HOST -u root -p$DB_ROOT_PASSWORD $DB_NAME > /var/www/qst/schools/qst_files/qst.sql
