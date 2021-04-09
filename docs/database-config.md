---
title: Database Configuration
---

GoCondor uses [GORM](https://gorm.io/) for database manipulation, all the features of `GORM` are available for two databases `mysql` and `sqlite`, more databases will be added in the future, to use GORM make sure `Database` is enabled in the `Features` struct which located at `config/features.go`, next add the database connection information to the `.env` file, here is a sample of it:
```bash
#################################
###            DATABASE       ###
#################################
DB_DRIVER=mysql  # mysql | sqlite

# MYSQL
MYSQL_HOST=localhost
MYSQL_DB_NAME=gocondor
MYSQL_PORT=3306
MYSQL_USERNAME=root
MYSQL_PASSWORD=
MYSQL_CHARSET=utf8mb4

# SQLITE
SQLITE_DB=database/db.sqlite
```
more information available at [GORM docs](https://gorm.io/docs/)