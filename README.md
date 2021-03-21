# Run all application

I have created basically sh file for start all application, is necessary to configure environment with utility for run

## Required utility

MySql: for install use xampp or mamp, or read instruction
from https://dev.mysql.com/doc/mysql-installation-excerpt/8.0/en/windows-install-archive.html

PHP: for install php read instruction from https://www.php.net/manual/en/install.php

Composer: for install composer read instruction
from: https://getcomposer.org/doc/00-intro.md#installation-linux-unix-macos

Laravel: for install laravel read instruction from: https://laravel.com/docs/7.x/installation

Node.js: download and install from: https://nodejs.org/it/

Maven: for install maven read instruction from: https://maven.apache.org/install.html

I suggest Postman for test REST api, download from: https://www.postman.com/downloads/
In this folder you will find a postman environment and collection for api testing, read guide for import config in
postman
from: https://learning.postman.com/docs/getting-started/importing-and-exporting-data/#importing-data-into-postman

## How to run South Africa Mobile Numbers

### Run Frontend

Open terminal in this folder and launch command: ```sh startSouthAfricaMobileNumbersFront.sh```

### Run Backend

Open terminal in this folder and launch command: ```sh startSouthAfricaMobileNumbersBack.sh```

## How to run Dolci Capricci

### Run Frontend

Open terminal in this folder and launch command: ```sh startDolciCapricciFront.sh```

### Run Backend

Open terminal in this folder and launch command: ```sh startDolciCapricciBack.sh```

## For db

I used mysql for all this project, as root user, root password and port 3306

For South Africa mobile numbers will find a sql file for db restore, the schema name if needed is
south-africa-mobile-numbers

#### The all projects folder contains README with basic instruction to run application
