---
title: Routing
---

All routes are defined in the `httpd/routes.go` file, a typical route consist of three main parts:

1. the HTTP method, could be `get`, `post`, `put`...etc
2. the path 
3. the handler function
Here is an example of a route to handle `get` request to the path `/todos` with a handler function named `showTodos`
```go
router.Get("/todos", handlers.ShowTodos)
```
The handler function `ShowTodos` should be defined in the handlers package, the path for it is `httpd/handlers`
for more information on how to organize your handlers, have a look at the [handlers section](./handlers) of the documentation

### Routing Groups
Routing groups helps you group related routes with the same base path together, here is how you can define routing groups in GoCondor:

file: `http/routes.go`
```go
router := routing.Resolve()

//Define your routes here
v1 = router.Group("v1")
v1.Get("/", handlers.SomeHandlerV1)
v1.Post("/", handlers.SomeHandlerPostV1)

v2 = router.Group("v2")
v2.Get("/", handlers.SomeHandlerV2)
v2.Get("/show", handlers.SomeHandlerShowV2)

```

