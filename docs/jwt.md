---
title: JWT Tokens
---

JWT tokens are used for authentication, GoCondor provides you with ways to generate `JWT tokens`, decode them, and check their expiry.
The configuration for `JWT tokens` can be found in the `.env` file and they will be injected into the environment, you can also inject these values with an external tool and that will would work too, 
The configuration helps you define things like the `secret` key and the `validity` of the tokens

#### JWT secret
The `jwt secret` is a random string. it's used to sign the `jwt token`, its recommended to have it's a minimum of `6` characters.
Remember to always keep your `JWT secret` secret.

#### Generate JWT tokens
Here is how to generate a JWT token 
```go
package handlers

import (
    "github.com/gocondor/core"
)

func Login(c *core.Context) *core.Response {
    // prepare the payload
    payload := map[string]interface{}{
        "userID": 12345
    }
    // generate the token
    tokenStr, err := c.GetJWT().GenerateToken(payload)
}
```

### Decode a token
To decode a token and extract the encoded information, check the code below
```go
package handlers

import (
    "github.com/gocondor/core"
)

func Login(c *core.Context) *core.Response {
    myToken := "my-jwt-token-string"
    payload, err := c.GetJWT().DecodeToken(myToken)
    if err != nil {
        return c.Response.SetStatusCode(400).Text(err.Error())
    }
}
```

### Check the token expiry
To check if a token has expired or not, refer to the code below: 
```go
package handlers

import (
    "github.com/gocondor/core"
)

func Login(c *core.Context) *core.Response {
    myToken := "my-jwt-token-string"
    tokenHasExpired, err := c.GetJWT().HasExpired(myToken)
    if err != nil {
        return c.Response.SetStatusCode(400).Text(err.Error())
    }

    if tokenHasExpired {
        // here token has expired
    }
}
```
