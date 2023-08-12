---
title: Middlewares
---
A Middleware is a pieces of functional that gets executed either before handling the request or after.
Mddlewares are located in the directory `middlewares/` in the root directory of the project.
A Middleware in GoCondor is simply a `function` of type `core.Middleware` that gets assigned to routes so that it can be executed before or after the execution of the request's [handler](https://gocondor.github.io/docs/handlers).

#### A Middleware to be executed before processing the request
In case the logic gets defined `before` calling the function `c.Next()`. Below an example of a middleware to executed before processing the request
```go
package middlewares

import (
    "fmt"

    "github.com/gocondor/core"
)

var myMiddleware core.Middleware = func(c *core.Context) {
    // Logic goes here ...
    c.Next()
}
```
to assign this middleware `myMiddleware` to a specific route, simply pass it as a third parameter to the route's definition, check this code below for more info:
```go
router.Get("/", handlers.Login, middlewares.myMiddleware)
```

#### A Middleware to be executed after processing the request
In case the logic gets defined `after` calling the function `c.Next()`. Below an example of a middleware to be executed after processing the request

```go
package middlewares

import (
    "fmt"

    "github.com/gocondor/core"
)

var myMiddleware core.Middleware = func(c *core.Context) {
    c.Next()
    // Logic goes here ...
}
```
to assign this middleware `myMiddleware` to a specific route, simply pass it as a third parameter to the route's definition, check the code below:
```go
router.Get("/", handlers.Login, middlewares.myMiddleware)
```
#### Assigning multiple middlewares to routes
You can simply pass them as a `second`, `third`, `fourth`, ...etc parameters to the route's definition, regardless of the middleware been a `before request handling middleware` or an `after request handling middleware`, here is how:
```go
router.Get("/", 
    handlers.Login, 
    middlewares.myMiddleware1, 
    middlewares.myMiddleware2
    middlewares.myMiddleware3
)
```

#### Return response from the middleware 
Sometimes you might want to return the response to users from the middleware, you can achieve that by simply calling the function `ForceSendResponse()` on the `Response` property on the context object.
```go
package middlewares

import (
    "github.com/gocondor/core"
)

var UnauthorizedCheck core.Middleware = func(c *core.Context) {
    // Logic goes here ...
    c.Response.
        SetStatusCode(401).
        SetContentType("text/html").
        HTML("<h1>unauthorized.</h1>").
        ForceSendResponse()

    c.Next()
}
```

#### Registering a middleware globally to all routes
You can register middlewares globally in the file `/register-global-middlewares.go` in the root directory of the project.
Simply pass the middleware as an argument to the function `core.UseMiddleware(your-middleware)`, here is how:
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
Always remember to call `c.Next()` function in your middlewares in the right place
