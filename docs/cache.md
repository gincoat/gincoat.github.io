---
title: Cache
---

Condor uses `Redis` for cache, to enable the cache features to set the attribute`Cache` to in `config/features.go` to `true`, then add Redis connection information in the `.env` file.
```bash

#################################
###            CACHE          ###
#################################
CACHE_DRIVER=redis
REDIS_HOST=localhost
REDIS_PORT=6379
REDIS_PASSWORD=
REDIS_TTL_SECONDS=0
REDIS_DB_NAME=
```
Next let's set something in the cache and retrieve it, here is how we can do it
```go
func SomeHander(c *gin.Context) {
	_, err := Cache.Set("name", "jack")
	if err != nil {
	 	panic(err)
	 }

	 // get from cache
	name, err := cache.Get("name")
```
Note:
the variable `Cache` is set in the file `http/handlers/deps.go`