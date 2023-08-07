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
Next, build the project by running the following command in the terminal:
```go
go build -o ./
```
this will produce an executable file with the name of your project in the root directory of your project

Next, run the executable file using following command:
```go
./[name-of-the-executable-file]
```
Finally, open up your browser and navigate to `localhost:8000`

To learn more check the [routing docs section](https://gocondor.github.io/docs/routing)
