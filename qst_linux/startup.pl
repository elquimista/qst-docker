use strict;
use lib qw(/home);
use lib qw(/usr/local/lib/x86_64-linux-gnu/perl/5.30.0);
use lib qw(/usr/local/share/perl/5.30.0);
use lib qw(/usr/lib/x86_64-linux-gnu/perl/5.30); 

# environment check
$ENV{MOD_PERL} or die "not running under mod_perl!";

# more detailed error_handling
#use Carp ( );
#$SIG{_ _WARN_ _} = \&Carp::cluck;
 
use File::Path;
#use Net::LDAP;
use POSIX qw(strftime);
use Crypt::PBKDF2;
use MIME::Base64;
use Archive::Zip qw(:ERROR_CODES :CONSTANTS);
use Exporter 'import';

use Apache::DBI;
DBI->install_driver("mysql");
Apache::DBI->connect_on_init
 ("DBI:mysql:$ENV{DB_NAME}:$ENV{DB_HOST}",
   $ENV{DB_USER},
   $ENV{DB_PASSWORD},
   {
    PrintError => 1, # warn() on errors
    RaiseError => 0, # don't die on error
    AutoCommit => 1, # commit executes immediately
   }
  );

#$Apache::DBI::DEBUG = 2;

  1;

