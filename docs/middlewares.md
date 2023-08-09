---
title: Middlewares
---
Middlewares are located in the directory `middlewares` in the root directory of the project
A Middleware in GoCondor is simply a `function` of the type `core.Middleware` that gets assigned to a `variable`.

#### A Middleware to be executed before processing the request
In case the logic gets defined `before` calling the function `c.Next()`. Below an example of a middleware that gets executed before processing the request
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
to assign this middleware `myMiddleware` to a specific route, check the code below:
```go
router.Get("/", handlers.Login, middlewares.myMiddleware)
```


#### A Middleware to be executed after processing the request
In case the logic gets defined `after` calling the function `c.Next()`. Below an example of a middleware that gets executed after processing the request

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
to assign this middleware `myMiddleware` to a specific route, check the code below:
```go
router.Get("/", handlers.Login, middlewares.myMiddleware)
```
#### Assigning multiple middlewares to routes
Here is how you can assign more than one middleware to a specific route 
```go
router.Get("/", 
    handlers.Login, 
    middlewares.myMiddleware1, 
    middlewares.myMiddleware2
    middlewares.myMiddleware3
)
```
Note:
Route middlewares are always passed as `third`, `fourth`, `fifth`,...etc arguments, right after the `handler` regardless of the middleware been a `before request processing middleware` or an `after request processing middleware`

#### Return response from the middleware 
Sometimes you might want to return the response to the user from the middleware, you can achieve that by simply calling the function `ForceSendResponse()` on the context object.
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

#### Register a middleware to a specific route
Here is how to register the middleware to a specific route
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
