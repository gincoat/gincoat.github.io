---
title: Context
---

The context is an `object` that provides you with all the functionalities and information you need to handle a request, it contains things like `request headers`, `form post data`, `uploaded files`, `database orm`, `sending emails`, ...etc.
In addition to that it contains various functions to return different types of responses like `json`, `html`, `text` ...etc.
Below are more details about the functionalities that the context provides you with:

### GetPathParam(key string)
Get the url path params
```go 
func SomeHandler(c *core.Context) {
	// route: example.com/users/:name
	name := c.GetPathParam("name")
}
```
### GetRequestParam(key string)
Get the form `post`, `get`, `put`,...etc data
```go 
func SomeHandler(c *core.Context) {
	// url: example.com/users?name=jhon
	name := c.GetRequestParam("name")
	
	fmt.Println(name) // outputs john
}
```
### RequestParamExists(key string)
Check's if a request parameter exists, it returns `true` if it exists and `false` if it doesn't
```go 
func SomeHandler(c *core.Context) {
	// url: example.com/users?name=jhon
	exists := c.RequestParamExists("name")
	
	fmt.Println(name) // outputs true
}
```

### GetHeader(key string)
Gets the value of a request header
```go 
func SomeHandler(c *core.Context) {
	token := c.GetHeader("authorization")
}
```

### GetUploadedFile(key string)
Returns information about the uploaded file
```go 
func SomeHandler(c *core.Context) {
	fileInfo, err := c.GetUploadedFile("uploaded-file-key")
	fileInfo.FullPath // full path to the temp location of the uploaded file
	fileInfo.Name // the name of the file
}
```
Where: 
`fileinfo` is an object that has general information about the uploaded file, here is all the file information that it provides:

- **fileInfo.FullPath**: full path to the temp location of the uploaded file
- **fileInfo.Name**: the file name without the path
- **fileInfo.NameWithoutExtension**: the file name without extension
- **fileInfo.Extension**: the extension of the file
- **fileInfo.Size**: the file size in bytes
to save the uploaded file to a specific location, check [this docs section](/docs/request#save-uploaded-file)

### MoveFile(srcPath, destLocation, newFileName) 
Move file from one location to another, it returns an error in case of any
```go 
func SomeHandler(c *core.Context) {
	err := c.MoveFile("./storage/myfile.paf", "./storage/pdfs/", "new-filename.pdf") 
}
```

### MapToJson(myMap map[string]interface{})
Convert map to json
```go
func SomeHandler(c *core.Context) {
	jsonString := c.MapToJson(myMap)
}
```


### GetBaseDirPath()
Get the base project directory path
```go
func SomeHandler(c *core.Context) {
	path := c.GetBaseDirPath()
}
```

### func CastToString(value interface{}) string 
Convert any variable to string, it panics if its not convertable to string
```go
func SomeHandler(c *core.Context) {
	string := c.CastToString(value)
}
```

### func CastToInt(value interface{}) int 
Convert any variable to `int` including `(int32, int64, ...etc)`, it panics if its not convertable to `int`
```go
func SomeHandler(c *core.Context) {
	valueInt := c.CastToInt(value)
}
```

### CastToFloat(value interface{}) float64
Convert any variable to `float64`, it panics if its not convertable to `float64`
```go
func SomeHandler(c *core.Context) {
	valueFloat64 := c.CastToFloat(value)
}
```
