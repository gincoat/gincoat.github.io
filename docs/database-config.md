---
title: Database Configuration
---

GoCondor uses [GORM](https://gorm.io/) to query the database, all the features of `GORM` are available for you to use. Supported databases are `mysql`, `postgres` and `sqlite`

### Enable GORM
`GORM` is disabled by default, you can enable it in the file `condfig/gorm.go` by setting the attribute `EnableGorm` to `true`

#### The database connection config
`GORM configuration` can be set in the `.env` file, the configuration also can be injected to the environment by using an external tool
Here is a sample of the configuration:
```bash
#######################################
######            DATABASE       ######
#######################################
DB_DRIVER=mysql  # mysql | postgres | sqlite
#_____ MYSQL _____#
MYSQL_HOST=localhost
MYSQL_DB_NAME=db_test
MYSQL_PORT=3306
MYSQL_USERNAME=root
MYSQL_PASSWORD=secret
MYSQL_CHARSET=utf8mb4

#_____ postgres _____#
POSTGRES_HOST=localhost
POSTGRES_USER=user
POSTGRES_PASSWORD=secret
POSTGRES_DB_NAME=db_test
POSTGRES_PORT=5432
POSTGRES_SSL_MODE=disable
POSTGRES_TIMEZONE=Asia/Dubai

#_____ SQLITE _____#
SQLITE_DB_PATH=storage/sqlite/db.sqlite
```
more information available at [GORM docs website](https://gorm.io/docs/)