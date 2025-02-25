README.txt

qst.zip is rather large because it contains the files to install Perl and MySQL and Apache on Windows.
Download qst_linux_mac.zip if you are doing a linux or mac install.
QST.pm (the program) is only 3.8 MB.

The zips contain installation instructions.

Usually if you are upgrading you only have to replace the QST.pm you have with the new QST.pm (or WINQST.pm or mac_QST.pm) contained in the zip, then stop and start apache. **Always read below for upgrading.

The languages other than English were done through Google Translate. If you notice issues let us know so we can fix them.

The .apk's are only for taking a QST.

Download qst-android-http.apk to test your server on your local network (just add the ip address of your server in Server) on your android device connected to your wifi network. 
  - This does not require a SSL certificate and is not secure!

Download qst-android-https.apk if you have a self signed or real certificate for your server (for your android device).
  - This ensures the security of the application.
  - This is the same one as in the Google Play Store.
  
We release versions of QST on a irregular basis.
 - This depends upon the complexity of what we are adding.
   - Some requests can be accomplished quickly.
   
 - Bugs are fixed as quickly as possible.

  *****************
  
Version 3.12.07 is our latest release.

Upgrading:

- Windows versions before 3.12.05 should be upgraded with the following replacing what is there at the end of the httpd.conf file         found under C:\Apache24\conf\:

        <ifModule mpm_winnt_module>
	ThreadStackSize  16888888
	ThreadsPerChild  1920
	MaxConnectionsPerChild  0
	</IfModule>

	Save and restart Apache.
	
	Additionally, open  C:\ProgramData\MySQL\MySQL Server 5.7\my.ini and change the following:

	max_connections=350
	innodb_buffer_pool_size=1028
	innodb_thread_concurrency=500
	max_connect_errors=200
	thread_cache_size=50 

	Under thread_cache_size=50 
	Add:
	back_log=200

	Stop and start MySQL, then stop and start apache.
	
      This improves the ability to handle larger numbers of users on Windows;
      ************************
     
- To upgrade from version 3.12.06:
	Copy the file show_wordxml_format.htm under the /qst directory in the download
	to your /qst directory to replace the one there.

- To upgrade from version 3.11.xx:
   	At a mysql prompt run:
   	mysql> use qst;
   	mysql> alter table questions add column memory varchar(5000) DEFAULT NULL;
   	mysql> alter table posted_qst add column memori int(1) DEFAULT NULL;
        mysql> exit;
        
        Restart Apache.
        
   - To upgrade from version 3.10.xx:
   	At a mysql prompt run:
   	mysql> use qst;
   	mysql> alter table posted_qst add column explanations int(1) DEFAULT NULL;
        mysql> alter table posted_qst add column source int(1) DEFAULT NULL;
        mysql> exit;
        Copy red_pin.png from the qst/schools folder where you unzipped QST to the qst/schools folder in your
         installation.
        Restart Apache.
   	   	
   - To upgrade from version 3.09.xx:
   	At a mysql prompt run:
   	mysql> use qst;
   	mysql> alter table questions add column explanation varchar(5000) DEFAULT NULL;
   	mysql> exit;
   	
   - To upgrade from version 3.08.xx:
   	At a mysql prompt run:
   	mysql> use qst;
   	mysql> alter table qst_files add column filedescrip varchar(501) DEFAULT NULL;
   	mysql> exit;
   	
   - To upgrade from version 3.07.05:
   	At a mysql prompt run:
   	mysql> use qst;
   	mysql> alter table questions modify column vlink varchar(150);
   	mysql> alter table questions modify column alink varchar(150);
   	mysql> exit;
   	
   - To upgrade from version 3.07.01:
        Make sure you replace the startup.pl located under /home/MyApache2
        with the one included in 3.07.02

   - To upgrade from version 3.06.xx:
        At a mysql prompt run:
        mysql> alter table users modify column f_name varchar(40) NOT NULL;
	mysql> alter table users modify column l_name varchar(40) NOT NULL; 
        
   - To upgrade from versions 3.05.xx to 3.06.00:
        This is a change of the database character set to UTF8mb4 to allow for characters in other languages.
        If you are only using the English version, you do not have to update.
        At a mysql prompt run:  (you will have to do this for all 25 table names in database)
        mysql>ALTER TABLE <table_name> CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

   - To upgrade from versions 3.04.xx to 3.05.00:
        At a mysql prompt run:
        mysql> alter table qst_attempts add column resume tinyint(1);
        mysql> update qst_attempts set resume=0;

   - To upgrade from previous versions of 3.04.xx :
        In a terminal run:
        sudo cpan -i Mime::Base64
        sudo cpan -i Archive::Zip
        sudo cpan -i Exporter

        at C:\ prompt run:
        cpan -i Mime::Base64
        cpan -i Archive::Zip
        cpan -i Exporter
        
    - To upgrade from previous versions of 3.03.xx run the following in MySQL:
        mysql> alter table questions add column pdf int(10);
        
   - To upgrade from previous versions of 3.02.xx run the following in MySQL:
        mysql> alter table posted_qst add column shuffle_ans int(1);
        mysql> alter table users add column photo varchar(15);
        
        Under /qst/schools/qst_files add directory photos
        
        
Version 3.0.xx are bug fixes, minor code changes, code clean up or new features.
  These versions of QST will run with the database you already have.
  Bugs are fixed as quickly as possible.

Version 3.x are database changes and you will have to run a database script to alter your previous database to work with this new version of QST.



  


