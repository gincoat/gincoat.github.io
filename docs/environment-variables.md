---
title: Environment Variables
---
Enviroment Variables are defined in the file `.env` at the root folder, they automatically get set into the `os` enviroment variables, you can access them using `os.Getenv("key-name")` function by passing the key name, here is a sample of the `.env` file content:
```bash
#################################
###                           ###
#################################
APP_NAME=Condor
APP_MODE=debug  # debug | release | test
APP_HTTP_HOST=localhost
APP_HTTP_PORT=8000

#################################
###            TLS            ###
#################################
APP_HTTPS_ON=false
APP_REDIRECT_HTTP_TO_HTTPS=false
APP_HTTPS_HOST=localhost
APP_HTTPS_CERT_FILE_PATH=ssl/server.crt
APP_HTTPS_KEY_FILE_PATH=ssl/server.key

#################################
###            JWT            ###
#################################
JWT_SECRET=jwt-secret-key
JWT_LIFESPAN_MINUTES=60
JWT_REFRESH_TOKEN_SECRET=jwt-refresh-token-secret
JWT_REFRESH_TOKEN_LIFESPAN_HOURS=24


#################################
###            DATABASE       ###
#################################
DB_DRIVER=sqlite  # mysql | sqlite

# MYSQL
MYSQL_HOST=localhost
MYSQL_DB_NAME=condor
MYSQL_PORT=3306
MYSQL_USERNAME=root
MYSQL_PASSWORD=
MYSQL_CHARSET=utf8mb4

# SQLITE
SQLITE_DB=database/db.sqlite


#################################
###            CACHE          ###
#################################
CACHE_DRIVER=redis

REDIS_HOST=localhost
REDIS_PORT=6379
REDIS_PASSWORD=
REDIS_DB_NAME=0
```
