---
title: Contribute
---

The framework consist of two main parts, each lives in a separate repository, the first part is the `core` which contains the framework core packages. the second part is `gocondor` which has the project folder structure and responsible of gluing everything together.

To contribute you simply need to clone these two repositories locally and create new branches from the `develop` branch, add your changes, then open up a `PR` on the `develop` branch.

Here is how you can set up the development workflow in your local machine:
1- Create the organization `gocondor` directory in your workspace, here is how the path to it should look like:
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
 github.com/gocondor/gocondor/integrations => ./integrations
 github.com/gocondor/gocondor/models => ./models
)

go 1.16

require (
 github.com/gin-gonic/gin v1.6.3
 github.com/gocondor/core v0.0.0-20210407100326-7c4af7b4c5a0
 github.com/joho/godotenv v1.3.0
 gorm.io/gorm v1.21.6
)
```
Note:
Note the first line in the `replace`statement this is needed to tell go that instead of using the remote core packages use the local copy where we will be making the changes, once you are done, open up your `PR` against `develop` branch.
