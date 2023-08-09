---
title: Cache
---

GoCondor uses `Redis` for cache and its disabled by default, you can enable it in the file `config/cache.go` by setting the attribute `EnableCache` to `true`, then add `Redis connection information` to the `.env` if you are using it. otherwise, you can use an external tool to inject these variables into the environment

 Here is a sample of the `Redis connection information in the `.env` file:
```bash
#######################################
######            CACHE          ######
#######################################
CACHE_DRIVER=redis
REDIS_HOST=localhost
REDIS_PORT=6379
REDIS_PASSWORD=
REDIS_DB=0
```

#### Set values in the cache
```go
package handlers

import (
    "github.com/gocondor/core"
)

func Login(c *core.Context) *core.Response {
    err := c.GetCache().Set("userID", 12345)
}
```

#### Set values in the cache with an expiration date
```go
package handlers

import (
    "github.com/gocondor/core"
)

func Login(c *core.Context) *core.Response {
    hours24 := time.Duration(time.Hour * 24) // 24 hours duration
    afterHours24: time.Now().Add(hours24) // the date after 24 hours from now
    err := c.GetCache().SetWithExpiration("userID", 12345, afterHours24) // expires after 24 hours
}
```

#### Get values from cache
Here is how you can get values from cache
```go
package handlers

import (
    "github.com/gocondor/core"
)

func Login(c *core.Context) *core.Response {
    userID, err := c.GetCache().Get("userID")
}
```

#### Cache Delete
Here is how you can delete something from the cache
```go
package handlers

import (
    "github.com/gocondor/core"
)

func Login(c *core.Context) *core.Response {
    err := c.GetCache().Delete("userID")
}
```
