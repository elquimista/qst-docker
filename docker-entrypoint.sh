#!/bin/sh
set -e

mkdir -p /var/run/mysqld
chown -R mysql:mysql /var/run/mysqld /var/lib/mysql
chmod 755 /var/run/mysqld

if [ ! -d /var/lib/mysql/mysql ]; then
  mysqld --initialize-insecure --user=mysql

  mysqld --user=mysql --skip-networking &
  mysql_pid="$!"

  until mysqladmin ping --silent; do
    sleep 1
  done

  mysql <<SQL
CREATE DATABASE IF NOT EXISTS qst;
CREATE USER IF NOT EXISTS 'qst'@'localhost' IDENTIFIED BY 'Qst#captain2';
GRANT ALL PRIVILEGES ON qst.* TO 'qst'@'localhost';
FLUSH PRIVILEGES;
SQL

  mysql qst < /temp/qst.sql

  mysqladmin shutdown
  wait "$mysql_pid"
fi

mysqld --user=mysql --skip-networking &
until mysqladmin ping --silent; do
  sleep 1
done

/usr/sbin/apache2ctl -D FOREGROUND
