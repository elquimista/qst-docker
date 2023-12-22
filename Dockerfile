FROM ubuntu:20.04

RUN apt-get update && \
    DEBIAN_FRONTEND=noninteractive \
    apt-get install -y \
      build-essential apache2 libapache2-mod-perl2 perl-doc libcrypt-pbkdf2-perl libdbd-mysql-perl mysql-client

WORKDIR /var/www/qst
COPY qst_linux/qst ./
COPY qst_linux/schools ./schools
RUN mkdir -p schools/qst_files/photos && \
    chmod 777 schools schools/qst_files schools/qst_files/photos

WORKDIR /home/MyApache2
COPY --chmod=715 qst_linux/QST.pm ./
COPY --chmod=711 qst_linux/startup.pl ./

WORKDIR /etc/apache2
COPY apache-qst.conf ./sites-available/000-default.conf
COPY apache2.conf ./apache2.conf

RUN PERL_MM_USE_DEFAULT=1 perl -MCPAN -e 'install Bundle::DBI' && \
    cpan Email::Valid && \
    cpan -i Net::DNS && \
    cpan -i Net::LDAP && \
    cpan -i Mail::Address && \
    cpan -i MIME::Base64 && \
    cpan -i Archive::Zip && \
    cpan -i Exporter && \
    perl -MCPAN -e 'install Apache::DBI'

COPY qst_linux/qst.sql /temp/
ENV DB_HOST=db
ENV DB_ROOT_PASSWORD=Qst#captain2root
ENV DB_USER=qst
ENV DB_PASSWORD=Qst#captain2
ENV DB_NAME=qst

WORKDIR /home/MyApache2

COPY init-db.sh /usr/local/sbin/init-db
COPY dump-db.sh /usr/local/sbin/dump-db
COPY restore-db.sh /usr/local/sbin/restore-db
COPY docker-entrypoint.sh /docker-entrypoint.sh
ENTRYPOINT ["/docker-entrypoint.sh"]

EXPOSE 80
