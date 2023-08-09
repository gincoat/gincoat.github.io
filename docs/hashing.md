---
title: Hashing passowrds
---
Hashing passowrds in `GoCondor` can be done by using the object `hashing` from the context, here is how you can do that: 
```go
package handlers

import (
    "github.com/gocondor/core"
)

func Login(c *core.Context) *core.Response {
    hashedPassword, err := c.GetHashing().HashPassword("my-password")
}
```
