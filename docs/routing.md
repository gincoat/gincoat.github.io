---
title: Routing
---

all routes are defined in the `httpd/routes.go` file, a typical route consist of three main parts, the
1- the HTTP method, could be `get`, `post`, `put`...etc
2- the path 
3- the handler function 
here is an example of a route to handle `get` request to the path `/todos` with a handler function named `showTodos`
```go
router.Get("/todos", handlers.ShowTodos)
```
The handler function `ShowTodos` should be defined in the handlers package, the path for it is `httpd/handlers`
for more information on how to organize your handlers, have a look at the [handlers section](./handlers) of the documentation
