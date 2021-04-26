---
title: Cache
---

GoCondor uses `Redis` for cache, to enable the cache feature set the attribute`Cache` to in `config/features.go` to `true`, then add Redis connection information in the `.env` file, here is a sample of the `.env` file content:
```bash

#################################
###            CACHE          ###
#################################
CACHE_DRIVER=redis
REDIS_HOST=localhost
REDIS_PORT=6379
REDIS_PASSWORD=
REDIS_DB_NAME=0
```
Next let's set something in the cache and retrieve it
#### Cache Set
```go
func SomeHander(c *gin.Context) {
	_, err := Cache.Set("name", "jack")

	if err != nil {
	 	panic(err)
	 }
```
#### Cache Get
```go
func SomeHander(c *gin.Context) {
	name, err := cache.Get("name")

	if err != nil {
	 	panic(err)
	 }

```
#### Cache Delete
```go
func SomeHander(c *gin.Context) {
	name, err := cache.Delete("name")
	
	if err != nil {
	 	panic(err)
	 }

```

Note:
the variable `Cache` is set in the file `http/handlers/deps.go`