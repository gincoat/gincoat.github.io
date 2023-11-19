---
title: Gaffer
---
`Gaffer` is `GoCondor's` `cli` tool, it helps with creating new `GoCondor` projects and performing other tasks.
Here is how you can install `Gaffer`
```bash
go install github.com/gocondor/gaffer@latest
```
### Create a new project using Gaffer
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
### Running the project in live reloading mode
For development purposes you might want to run your project in `live reloading` mode, here is how you can do that.
First `cd` into the project directory and then run
```bash
gaffer run:dev
```
### Generator commands
In `gaffer` there is a way to generate different files with boilerplate code to speed up your development process, below are the different generator commands in `gaffer`

#### Generate a Handler
To generate a request handler with the name `UsersLogin` placed in the file `handlers/users.go` run the following command
```bash
gaffer gen:handler UsersLogin -f users.go
```
where:
`UsersLogin`: is the name of the handler func
`-f users.go`: `-f` is a flag that indicates the file which the handler func will be placed in, `users.go` is the name of the file to place the handler in,  new file will be created if it does not exist.
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
this command will generate the file `models/user.go` with the following code
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
#### Generate Event
You can use the command `gaffer gen:event` to generate both an `event` and an `event job` to be executed when the event is triggered, here is an example
```bash
gaffer gen:event user-signedup -j SendWelcomeEmail
```
where:
`user-signedup`: is the name of the event and it will be appended as constant to the file `events\event-names.go`
`SendWelcomeEmail` is the job name to be executed when the event is triggered, 
Note: `event jobs` are simply functions assigned to variables of type `core.EventJob`,
here is how the content of the `event job` will look like
```go
package eventjobs

import (
    "github.com/gocondor/core"
)

var SendWelcomeEmail core.EventJob = func(event *core.Event, c *core.Context) {
    // logic implementation goes here...
}
```
Next, you need to assign the event job to the event using the `events manager` in the file `register-events.go`, here is how:
```go
// Copyright 2023 Harran Ali <harran.m@gmail.com>. All rights reserved.
// Use of this source code is governed by MIT-style
// license that can be found in the LICENSE file.

package main

import (
    "github.com/gocondor/core"
    "github.com/gocondor/gocondor/events"
    eventjobs "github.com/gocondor/gocondor/events/jobs"
)

// Register events
func registerEvents() {
    eventsManager := core.ResolveEventsManager()
    //########################################
    //#      events registration         #####
    //########################################

    // register your event here...
    eventsManager.Register(events.USER_SIGNEDUP, eventjobs.SendWelcomeEmail)
}
```
#### Generate event job
you can use the command `gaffer gen:eventjob` to generate an event job, here is how
```bash
gaffer gen:eventjob SendWelcomeEmail
```
it will generate the file `events/jobs/send-welcome-email.go` with the following content
```go
package eventjobs

import (
    "github.com/gocondor/core"
)

var SendWelcomeEmail core.EventJob = func(event *core.Event, c *core.Context) {
    // logic implementation goes here...
}

```