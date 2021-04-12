---
title: Request
---

#### URL Parameters
URL or Path parameters can be defined by prefixing the parameter in the path with `:`, the following example shows you how to define a url parameter and how to get its value:

`httpd/router.go`
```go
router.Get("/user/:name", handlers.SomeHandler)
```

`httpd/handlers/users.go`
```go
func SomeHandler(c *gin.Context) {
	name := c.Param("name")

	c.JSON(http.StatusOK, gin.H{
		"message": fmt.Sprintf("hello %s!", name),
	})
}

```

#### Query data
Query data are passed in the url `/someurl?name=jack&age=30`, to get the value of query parameters you can use any of the following methods:
```go
func SomeHandler(c *gin.Context) {
	name := c.Query("name") # get the parameter 

	name := c.DefaultQuery("name", "guest") # use guest as default if name is missing 
}
```

#### Post Data
here is how you can get the posted data:
```go
func SomeHandler(c *gin.Context) {
	name := c.PostForm("name") # get the parameter 

	name := c.DefaultPostForm("name", "guest") # use 'guest' as default if name is missing 
}
```

#### Files:
here is how you can get a single file
```go
func SomeHandler(c *gin.Context) {
	file, _ := c.FormFile("filename")
}
```

here is how you can get multiple files:
```go
func SomeHandler(c *gin.Context) {
	form, _ :=c.MultipartForm()
	files := form.File["upload[]"]

	for _, file := range files {
		fmt.Prinln(file)
	}
}
```

#### Save uploaded file:
Save uploaded files to specific destination
```go
func SomeHandler(c *gin.Context) {
	file, _ := c.FormFile("filename")
	c.SaveUploadedFile(file, dest)
}
```

#### Header Data:
here is how you can get header data:
```go
func SomeHandler(c *gin.Context) {
	authToken := c.Request.Header["Authorization"] # get the 'authorization' header
}
```
