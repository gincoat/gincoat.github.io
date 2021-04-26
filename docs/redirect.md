---
title: Redirect
---

To redirect to any url internal or external simply call the context's method `Redirect`, here is how you can do it:
```go
func SomeHandler(c *gin.Context){
	c.Redirect(http.StatusMovedPermanently, "https://google.com")
}
```
Here is a list of [all http codes](https://golang.org/src/net/http/status.go)
