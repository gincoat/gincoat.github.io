---
title: Package Integrator
---

Package integrators are functions to give you the ability to initiate the variables of third party packages and integrate them into gin context, the main goal behind it is to hide the complexity of initiating packages from your handlers and make them available to every part of your app that have access to gin context variable.

Package integrators are located in the directory `integrations` at the root, to make it clear, let's integrate the package [Afro filesystem](https://github.com/spf13/afero).
First we need to install the package by running `go get github.com/spf13/afero`,
next let's create the integrator file in the folder `integrations`, lets call it `afero.go` and let's add to it the content below:

```go
package integrations

import (
	"github.com/gin-gonic/gin"
	"github.com/spf13/afero"
)

var afero gin.HandlerFunc = func(c *gin.Context) {
	var AppFs = afero.NewOsFs()

	//set the package varialbe in gin context using c.Set(key, pkg-variable)
	c.Set("afero", AppFs)

	//continute execution
	c.Next()
}

```
Now let's register this integrator, we can do that in the file `integrations/registrar.go`, inside the function `RegisterPKGIntegrations()` you simply need to resolve the integrator variable and use it to attach our integrator, here is the code: 
```go
func RegisterPKGIntegrations() {
	pkgi := pkgintegrator.Resolve()

	//add your packages here
	pkgi.Integrate(afero)

}

```
To retrieve the variable and start using it in your handlers, you can do it like below:
```go
afero := c.MustGet("afero").(afero.Fs)

file, err := afero.OpenFile(file-name, flag, perm)
```
Note:
the part `.(afero.Fs)` is to validate the type of the retrieved variable 
