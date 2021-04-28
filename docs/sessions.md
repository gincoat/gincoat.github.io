---
title: Sessions
---

GoCondor gives you the option to manage your sessions with any of the three supported drivers: memstore, cookie, or Redis. The sessions driver can be configured in the `.env` file:
```bash
#################################
###            Session        ###
#################################
SESSION_DRIVER=memstore  # memstore | cookie | redis
```
#### Session Set
To set a value in the session you can use the following code:
```go
func SomeHandler(c *gin.Context) {
	Session.Set("key", "value", c)
}
```
Note:
the variable `Session` is set in the file `http/handlers/deps.go`

#### Session Get
To get a value from the session you can use the following code:
```go
func SomeHandler(c *gin.Context) {
	Session.Get("key", c)
}
```
#### Session Pull
Pull retrieves a value from the session and deletes it, below is how you can use pull
```go
func SomeHandler(c *gin.Context) {
	Session.Pull("key", c)
}
```

#### Session Delete
To delete a value from the session you can use the following code:
```go
func SomeHandler(c *gin.Context) {
	Session.Delete("key", c)
}
```
#### Session Clear
Clear is used to delete everything stored in the session
```go
func SomeHandler(c *gin.Context) {
	Session.Clear(c)
}
```

