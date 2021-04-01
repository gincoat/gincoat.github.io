---
title: Features Control
---

Features cotrol gives you the ability to decide what features to turn on or off,
it's simply a struct  located in `config/features.go` with attributes of type boolean set them to true for the features you like to use, here is the content of that file:
```go
package config

import (
	"github.com/gincoat/core"
)

// Features to control Gincoat core features
var Features *core.Features = &core.Features{
	Database: false, // Database
	Cache:    false, // Cache
	GRPC:     false, // GRPC 
}

```
