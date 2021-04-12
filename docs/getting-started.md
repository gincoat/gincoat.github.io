---
title: Getting Started
---

First make sure you have `GoCondor cli` installed by running `go get github.com/gocondor/installer/condor`, then create a project using the following command `gocondor new [project-name] [project-location]`

Now Let's create a route to handle our first request.
lets assume the request is of a type `get` and will be made to the root `/` and the response should be the following:
```json
{
	"message": "Hello from example handler!"
}
```

Let's start by defining the handler function for the request, to do that first create a file with the name `example.go` in `httpd/handlers` folder and then add to it the following code:

file path: `httpd/handlers/example.go`
```go
package handlers

import (
	"net/http"
	
	"github.com/gin-gonic/gin"
)

func ExampleShow(c *gin.Context) {
    message := "Hello from example handler!"
    c.JSON(http.StatusOK, gin.H{
        "message": message,
    })
}
```
Next lets define the route, to do that open up the file `httpd/routes.go`, then inside the function `RegisterRoutes()` add this line `router.Get("/", handlers.ExampleShow)` and make sure it looks like below:
```go
func RegisterRoutes() {
    router := routing.Resolve()
    // Define your routes here
    router.Get("/", handlers.ExampleShow)
}

```
Next cd into the project folder and start the app by running the following command:
```bash
condor run:dev
```
Finally, open up your browser and navigate to `localhost:8000`
