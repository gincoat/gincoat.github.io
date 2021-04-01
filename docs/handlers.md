---
title: Handlers
---

Handlers
a handler is nothing but a function of type `gin.HandlerFunc` that you write in it the logic to handle the request, it has the following signature:
```go
func (c *gin.Context){}
```
it accepts a variable of Gin context which provides you will all the functionalities and variables that you may need to process the request

how to organize your handlers
the best way to organize handlers is to think of them like `controller's actions` in `MVC`. Just like in `MVC` where we create a `controller` for every `resource`, here we create a handlers file for every `resource`.

For example, let's assume that we are building an app to manage todos which will be added by users. By analyzing we can see that we need to manage two resources: `users` and `todos`.
Now let's create these files:
1- the first file `httpd/handlers/users.go`, and the content is:
```go
package handlers

import (
	"github.com/gin-gonic/gin"
)

func UsersShow(c *gin.Context) {
	//show the list of users
}

func UsersStore(c *gin.Context) {
	// store a user
}

func UsersEdit(c *gin.Context) {
	// edit a user
}

func UsersDelete(c *gin.Context) {
	// edit a user
}
```

1- the second file `httpd/handlers/todos.go`, and the content is:
```go
package handlers

import (
	"github.com/gin-gonic/gin"
)

func TodosShow(c *gin.Context) {
	//show the list of todos
}

func TodosStore(c *gin.Context) {
	// store a todo
}

func TodosEdit(c *gin.Context) {
	// edit a todo
}

func TodosDelete(c *gin.Context) {
	// edit a todo
}
```
note:
as you can see all handler's names are prefixed with the resource's names, and this is to avoid collision between names since all handlers share the same package name `handlers`
