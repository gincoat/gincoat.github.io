---
title: Authentication
---

Auth package helps you work with users authentication, it helps you log users in, log them out, and check if they are already authenticated, it uses the `sessions` package under the hood to perform these action, the package path is `"github.com/gocondor/core/auth"`, to work with it you need first to import it and then resolve the instance of the auth using `auth.Resolve()` method.

### Login users in
Here is how you can log a user in:
```go
func SomeHandler(c *gin.Context) {
	Auth := auth.Resolve()
	Auth.Login(userID, c)
}
```

### Check if a user is logged in
Here is how you can check if a user is logged in:
```go
func SomeHandler(c *gin.Context) {
	Auth := auth.Resolve()
	if Auth.Check(userId, c) {
		// user is logged in
	}
}
```

### Login users out
Here is how you can log a user out:
```go
func SomeHandler(c *gin.Context) {
	Auth := auth.Resolve()
	Auth.Logout(userID, c)
}
```

