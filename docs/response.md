---
title: Response
---
Below is the different types of responses you can return to the user

## Return JSON
```go
func SomeHandler(c *core.Context) {
    return c.Response.Json(myJson)
}
```

## Return HTML
```go
func SomeHandler(c *core.Context) {
    return c.Response.HTML(myHTML)
}
```

## Return Text
```go
func SomeHandler(c *core.Context) {
    return c.Response.Text(myText)
}
```

## Return Any response
```go
func SomeHandler(c *core.Context) {
    return c.Response.Any(anyResponse)
}
```

## Set response content type
```go
func SomeHandler(c *core.Context) {
    return c.Response.SetContentType("application/json").any(myJson)
}
```
## Set response headers
```go
func SomeHandler(c *core.Context) {
    return c.Response.SetHeader("key", "value").Json(myJson)
}
```
## Set response status code
```go
func SomeHandler(c *core.Context) {
    return c.Response.SetStatusCode(400).Json(myJson)
}
```
