---
title: Features Control
---

Features cotrol gives you the ability turn on the features you want to use, and off the onces that you don't,
it's simply a struct  located in `config/features.go` with attributes of type boolean set them to true for the features you like to use, here is the content of that file:
```go
package config

import (
	"github.com/gocondor/core"
)

// Features to control Condor core features
var Features *core.Features = &core.Features{
	Database: false, // Database
	Cache:    false, // Cache
	GRPC:     false, // GRPC 
}

```
