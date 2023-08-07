---
title: Middlewares
---
Middlewares are located in the directory `middlewares` in the root directory of the project
Middlewares in GoCondor are functions with the type `core.Middleware`

#### Middleware to be executed before processing the request
Below an example for a middleware that gets executed before processing the request
```go
package middlewares

import (
	"fmt"

	"github.com/gocondor/core"
)

var ExampleMiddleware core.Middleware = func(c *core.Context) {
	// Logic goes here ...
	c.Next()
}
```

#### Middleware to be executed after processing the request
Below an example for a middleware that gets executed after processing the request

```go
package middlewares

import (
	"fmt"

	"github.com/gocondor/core"
)

var ExampleMiddleware core.Middleware = func(c *core.Context) {
	c.Next()
	// Logic goes here ...
}
```
#### Return response from the middleware 
Sometimes you might want to return the response to the user from the middleware not from the handler, below is how you can achieve that
```go
package middlewares

import (
	"github.com/gocondor/core"
)

var HandleNotFound core.Middleware = func(c *core.Context) {
	// Logic goes here ...
	c.Response.
		SetStatusCode(404).
		SetContentType("text/html").
		HTML("<h1>Not found.</h1>").
		ForceSendResponse()

	c.Next()
}
```

#### Register a middleware to a specific route
Here is how to register the middleware to a aspecific route
```go
	router.Get("/", handlers.Login, middlewares.ExampleMiddleware)
```

#### Registering a middleware globally to all routes
You can register middlewares globally in the file `register-global-middlewares.go` in the root dir.
Simply pass the middleware as an argument to the function `core.UseMiddleware(your-middleware)`.
Here is how you can achieve that 
```go
package main

import (
	"github.com/gocondor/core"
	"github.com/gocondor/[my-project]/middlewares"
)

func registerGlobalMiddlewares() {
	//########################################
	//# Global middlewares registration  #####
	//########################################

	// Register global middlewares here ...
	core.UseMiddleware(middlewares.HandleNotFound)
	core.UseMiddleware(middlewares.ExampleMiddleware)
}
```

#### Note
Always remember to call `c.Next()` function in your middlewares
