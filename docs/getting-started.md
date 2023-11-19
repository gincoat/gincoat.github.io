---
title: Getting Started
---
To create a new GoCondor project you need to install `Gaffer` first which is the `cli tool` for `GoCondor`

#### Installing the CLI tool [Gaffer]
To install the `gaffer` globally open up your terminal and run the following command:
```bash
go install github.com/gocondor/gaffer@latest
```

#### Create a new project:
To create a new project run the following command
```bash
gaffer new myapp github.com/gocondor/myapp
```
where:
`myapp` is the name of your project.
` github.com/gocondor/myapp` is the remote repository that will host the project
#### Add a route 
Let's create a route that returns `hello world`
Open up the file `routes.go` in the root of your project and add to it the code below:
```go "file: routes.go"
router.Get("/", func(c *core.Context) *core.Response {
	JsonString := `{"message": "hello world"}`

	return c.Response.Json(JsonString)
})
```
Next, in your terminal navigate to the project dir and run the following command to start the `live reloading`:
```go
gocondor run:dev
```
Finally, open up your browser and navigate to `localhost:80`

To learn more check the [routing docs section](https://gocondor.github.io/docs/routing)
