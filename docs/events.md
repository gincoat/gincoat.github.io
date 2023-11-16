---
title: Events
---
In `GoCondor` defining events is straight forward, first you need to add the event name as a constant to the file `events\event-names.go`
```go title="#file: events\event-names.go"
package events

const PASSWORD_CHANGED = "password-changed"
const PROCESS_COMPLETED = "process-completed"
```
Next you need to create the `event job`

### Event Job
the event job is simply a function that gets executed everytime the event is triggered, 
here is an example of one
```go title="#file: events\jobs"
package eventjobs

import (
	"fmt"

	"github.com/gocondor/core"
	"github.com/gocondor/gocondor/models"
)

var SendPasswordChangedNotificationEmail core.EventJob = func(event *core.Event, c *core.Context) {
	go func() {
		// logic to send the email goes here
	}()
}
```
Next, you have to register the `event job` using the `events manager` so it can be executed when the event is triggered, you can simply do that in the file `register-events.go`
```go 
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

	// register your event here here ...
	eventsManager.Register(events.PASSWORD_CHANGED, eventjobs.SendPasswordChangedNotificationEmail)
}
```
### Triggering an event
Events can be triggered using the `events manager`, here is how
```go
// Copyright 2023 Harran Ali <harran.m@gmail.com>. All rights reserved.
// Use of this source code is governed by MIT-style
// license that can be found in the LICENSE file.

package handlers

import (
	"github.com/gocondor/core"
	"github.com/gocondor/gocondor/events"
	"github.com/gocondor/gocondor/models"
)

func Signup(c *core.Context) *core.Response {
    var user models.User
	err = c.GetEventsManager().Fire(
        &core.Event{
            Name: events.PASSWORD_CHANGED, 
            Payload: map[string]interface{}{
                "user": user,
            }
    })
}
```
