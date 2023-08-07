---
title: Routing
---

All routes are defined in the file `routes.go` which is located in the root dir, here is an example for defining a route:
```go
router.Get("/todos", handlers.ListTodos)
```
Where `handlers.ListTodos` is the handler function that handles the request, to learn more about `handlers` click [here](/docs/handlers)