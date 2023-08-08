---
title: Redirect
---

To redirect to any URL internal or external simply call the context's method `Redirect`, here is how you can do it:
```go
func SomeHandler(c *core.Context){
    c.Redirect(http.StatusMovedPermanently, "https://google.com")
}
```
Here is a list of [all HTTP codes](https://golang.org/src/net/http/status.go)
