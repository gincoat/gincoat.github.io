---
title: Getting Started
---
Let's add the route `/hello`, and lets have `hello there!` as the response.
To do that Open the file `http/routes.go` in your editor, update the function `RegisterRoutes()`, make sure the it looks like below:
```go
func RegisterRoutes() {
    router := routing.Resolve()

    // Define your routes here
    router.Get("/hello", func(c *gin.Context) {
        message := "hello there!"

        c.JSON(http.StatusOK, gin.H{
            "message": message,
        })
    })
}
```
Next cd into the project folder and start the app by running the following command:
```bash
gocondor run:dev
```
Finally, open up your browser and navigate to `localhost:8000/hello`.

To learn how to create handlers files and how to add handlers to them check [handlers docs](./handlers)
