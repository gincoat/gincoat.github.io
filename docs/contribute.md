---
title: Contribute
---

The framework consist of two main parts, each lives in a separate repository, the first part is the core `ginthub.com/gocondor/core` which contains the framework core packages. the second part is gocondor `ginthub.com/gocondor/gocondor` which has the the framework folder structure.

To contribute you simply need to clone these two repositories locally and create new branches from the `develop` branch, add your changes, then open up a `PR` on the `develop` branch.

Here is how you can set up the development workflow in your local machine:
1- Create the organization `gocondor` directory in your Go's workspace, here is how the path to it should look like:
```bash
$GOPATH/src/ginthub.com/gocondor
```
2- clone the repository `core` inside the `organization` directory, here is how:
```bash
# cd into the organization directory
cd $GOPATH/src/ginthub.com/gocondor

# clone the core module
git clone git@github.com:gocondor/core.git
```
2- clone the repository `gocondor`, here is how you can do it
```bash
# cd into the organization directory
cd $GOPATH/src/ginthub.com/gocondor

# clone the gocondor module
git clone git@github.com:gocondor/gocondor.git
```
3- cd into the project `gocondor` and open up `go.mod` in your editor and add the line `github.com/gocondor/gocondor/core => [full-local-path-to-core]` to the `replace`statement, make sure it looks something like this:
```go
module github.com/gocondor/gocondor

replace (
 github.com/gocondor/core => C:/Users/myname/go/src/github.com/gocondor/core

 github.com/gocondor/gocondor/config => ./config
 github.com/gocondor/gocondor/httpd => ./httpd
 github.com/gocondor/gocondor/httpd/middlewares => ./httpd/middlewares
 github.com/gocondor/gocondor/httpd/handlers => ./httpd/handlers
 github.com/gocondor/gocondor/models => ./models
)
```
Next run `go mod tidy`
Note:
The line we added in the `replace`statement is needed to tell go that instead of using the remote core packages use the local copy where we will be making the changes to the core if any, once you are done, open up your `PR` against `develop` branch.
