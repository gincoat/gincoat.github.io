---
title: Rendering Response
---

Rendering the response is based on the type of the response, below is the different types of responses you can render

## Rendering HTML
`HTML` is rendered using the method `c.HTM(code int, templateName string, obj interface{})` in the context
```go
func SomeHandler(c *gin.Context) {
    c.HTML(http.StatusOK, "index.html", gin.H{
        "message": "this is a message",
    })
}
```

## Rendering JSON
`JSON` is rendered using the method `c.JSON(code int, obj interface{})` in the context
```go
func SomeHandler(c *gin.Context) {
    c.JSON(http.StatusOK, gin.H{
        "message": "this is a message",
    })
}
```

## Rendering XML
`XML` is rendered using the method `c.XML(code int, obj interface{})` in the context
```go
func SomeHandler(c *gin.Context) {
    c.XML(http.StatusOK, gin.H{
        "message": "this is a message",
    })
}
```

## Rendering YAML
`YAML` is rendered using the method `c.YAML(code int, obj interface{})` in the context
```go
func SomeHandler(c *gin.Context) {
    c.XML(http.StatusOK, gin.H{
        "message": "this is a message",
    })
}
```
