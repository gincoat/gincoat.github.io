---
title: Getting Started
---
Let's create a route that returns `hello world`
Open up the file `routes.go` in the root of your project and add to it the code below:
```go "defining a route"
	router.Get("/", func(c *core.Context) *core.Response {
		JsonString := `{"message": "hello world"}`

		return c.Response.Json(JsonString)
	})
```
Next, in your terminal navigate to the project dir and run the following command:
```go
gocondor run:dev
```
Finally, open up your browser and navigate to `localhost:8000`

To learn more check the [routing docs section](https://gocondor.github.io/docs/routing)
