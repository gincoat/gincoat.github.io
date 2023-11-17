---
title: Gaffer
---
`Gaffer` is `GoCondor's` `cli` tool, it helps with creating new `GoCondor` projects and performing other tasks.
Here is how you can install `Gaffer`
```bash
go install github.com/gocondor/gaffer@latest
```
### Create new project using Gaffer
Here is how you can create new `goCondor's` projects using `gaffer`
```bash
gaffer new [project-name] [project-remote-repository]
```
Example
```bash
gaffer new myapp github.com/gocondor/myapp
```
where:
`project-name` is the name of your project
`remote-repository` is the remote repository that will host the project, usually `github.com` is used.
### Running the project in hot reloading mode
For development purpose you might want to run your project in `hot reloading` mode, here is how you can do that.
First `cd` into the project directory and then run
```bash
gaffer run:dev
```
### Generators commands
In `gaffer` there is a way to generate different files with boilerplate code to speed up your development process, below are the different generators commands in `gaffer`

#### Generate a Handler
To generate a request handler with the name `UsersLogin` placed in the file `handlers/users.go` run the following command
```bash
gaffer gen:handler UsersLogin -f users.go
```
where:
`UsersLogin`: is the name of the handler func
`-f users.go`: `-f` is a flag indicates the file which the handler func will be placed in, `users.go` is the name of the file to place the handler in,  new file will be created if it's not exist.
the result will be the following file.

```go title="#file: handlers/users.go"
package handlers

import (
	"github.com/gocondor/core"
)

func UsersLogin(c *core.Context) *core.Response {
	// logic implementation goes here...

	return nil
}
```
#### Generate a middleware 
To generate a middleware with the name `AuthCheck` run the following command 
```bash
gaffer gen:middleware AuthCheck
```
this command will generate the file `middlewares/auth-check.go` with the following code
```go
package middlewares

import (
	"github.com/gocondor/core"
)

var AuthCheck core.Middleware = func (c *core.Context) {
	c.Next()
}
```
#### Generate a model
To generate a model with the name `user` run the following command
```bash
gaffer gen:model User
```
this command with generate the file `models/user.go` with the following code
```go
package models

import "gorm.io/gorm"

type User struct {
	gorm.Model
	// add your field here...
}

// Override the table name
func (User) TableName() string {
	return "users"
}

```