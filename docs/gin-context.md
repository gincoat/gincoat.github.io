---
title: Gin Context
---

Gin Context is a struct that provides you with all the functionalities and information that you need to handle a request, it contains things like `headers`, `request data`, `attachments` and more, below are some methods provided in the context, for more check the [Gin Context Docs](https://pkg.go.dev/github.com/gin-gonic/gin#Context):
```go 
func SomeHander(c *gin.Context) {
	c.Abort()
	c.AbortWithError(code int, err error) *Error
	c.ClientIP() string
	c.Cookie(name string) (string, error)
	c.File(filepath string)
	c.FileAttachment(filepath, filename string)
	c.GetPostFormArray(key string) ([]string, bool)
	c.Query(key string) string
	c.SaveUploadedFile(file *multipart.FileHeader, dst string) error
	// and more
}
```
