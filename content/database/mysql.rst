MySQL
=====

.. code:: sh

   mysqld --initialize --user=mysql --basedir=/usr --datadir=/var/lib/mysql

Output::

   mysqld: Can't create directory '/var/lib/mysql/' (OS errno 17 - File exists)
   2021-08-23T03:01:13.567666Z 0 [Warning] [MY-010915] [Server] 'NO_ZERO_DATE', 'NO_ZERO_IN_DATE' and 'ERROR_FOR_DIVISION_BY_ZERO' sql modes should be used with strict mode. They will be merged with strict mode in a future release.
   2021-08-23T03:01:13.568521Z 0 [System] [MY-013169] [Server] /usr/bin/mysqld (mysqld 8.0.24) initializing of server in progress as process 64858
   2021-08-23T03:01:13.579931Z 0 [ERROR] [MY-013236] [Server] The designated data directory /var/lib/mysql/ is unusable. You can remove all files that the server added to it.
   2021-08-23T03:01:13.580098Z 0 [ERROR] [MY-010119] [Server] Aborting
   2021-08-23T03:01:13.583005Z 0 [System] [MY-010910] [Server] /usr/bin/mysqld: Shutdown complete (mysqld 8.0.24)  Source distribution.
