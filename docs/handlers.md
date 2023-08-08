---
title: Handlers
---

A Handler is nothing but a function to handle the HTTP request
Here is an example of a handler function to list users
```go title="#file: handlers/users.go"
package handlers

import (
    "github.com/gocondor/core"
)

func ListUsers(c *core.Context) *core.Response {
    //The logic for listing users
}
```

### How to organize the handlers
The best way to organize handlers is to think of them like `controller's actions` in `MVC`.
You can simply group all handlers of the same resource in one file.
here is an example:
Imaging we are creating an app for handling `todos`, in this app we have `users` and the `users` have `todos` here is how we can organize the handlers of both the `users` and the `todos`


1- The handlers of users
```go title="#file: handlers/users.go"
package handlers

import (
    "github.com/gocondor/core"
)

func CreateUsers(c *core.Context) *core.Response {
    // the logic here...
}

func ListUsers(c *core.Context) *core.Response {
    // the logic here...
}

func DeleteUsers(c *core.Context) *core.Response {
    // the logic here...
}

```

1- the handlers of todos
```go
package handlers

import (
    "github.com/gocondor/core"
)

func CreateTodos(c *core.Context) *core.Response {
    // the logic here...
}

func ListTodos(c *core.Context) *core.Response {
    // the logic here...
}

func DeleteTodos(c *core.Context) *core.Response {
    // the logic here...
}
```
