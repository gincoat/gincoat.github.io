---
title: Middlewares
---

The middleware is a piece of functionality that gets executed either before processing the request or after. it's just a function of type `gin.HandlerFunc`

### Middleware Before handling the request
Let's create an example for `before middleware` and let's call it `BeforeExample` and let's call the file `httpd/middlewares/before-example.go`:

```go
package middlewares

import (
	"fmt"

	"github.com/gin-gonic/gin"
)

var BeforeExample gin.HandlerFunc = func(c *gin.Context) {
	// Code goes here 

	// Pass on to the next-in-chain
	c.Next()
}

```
### Middleware After handling the request
Let's create an example for `after middleware` and let's call it `AfterExample` and let's call the file `httpd/middlewares/before-example.go`:

```go
package middlewares

import (
	"fmt"

	"github.com/gin-gonic/gin"
)

var AfterExample gin.HandlerFunc = func(c *gin.Context) {
	// Pass on to the next-in-chain
	c.Next()

	// Code goes here 
}

```

### Using the middleware
There are two ways to use the middleware, either globally or per-route

1- global middlewares
let's register the middleware `BeforeExample` globally, to do that open up the file `httpd/middlewares/registrar.go`, and add `mwEngine.Attach(MiddlewareExample)` to the body of the function `RegisterMiddlewares()` and make sure it looks something like this:
```go
func RegisterMiddlewares() {
	mwEngine := middlewaresengine.Resolve()

	//Register your middlewares here
	mwEngine.Attach(MiddlewareExample)
}

```

2- Per-route middlewares
let's register middleware `AfterMiddleware` for this route `router.Get("/home", handlers.HomeShow)`.
To do that simply pass the middleware right before the handler, and make sure it looks like this:
```go
router.Get("/update", middlewares.AfterMiddleware, handlers.HomeUpdate)
```
you can add as many middlewares per-route as you want, simply pass them as parameters before the handler
