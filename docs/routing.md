---
title: Routing
---

All routes are defined in the file `routes.go` which is located in the root dir, here is an example for defining a route:
```go title="#file: routes.go"
package main

import (
	"github.com/gocondor/core"
	"github.com/gocondor/gocondor/handlers"
)

// Register the app routes
func registerRoutes() {
	router := core.ResolveRouter()
	//#############################
	//# App Routes            #####
	//#############################

	// Define your routes here...
    router.Get("/todos", handlers.ListTodos)
}
```
Where `handlers.ListTodos` is the handler function that handles the request.
```go title="#file: handlers/todos.go"
package handlers

import (
    "github.com/gocondor/core"
)

func ListTodos(c *core.Context) *core.Response {
    //The logic for listing users
}
```


 to learn more about `handlers` click [here](/docs/handlers)