---
title: Context
---

The context is an `object` that provides you with all the functionalities and information you need to handle a request, it contains things like `request headers`, `form's post data`, `uploaded files`, `database orm`, `sending emails`, ...etc.
In addition to that it contains the `response object` which contains various functions to return different types of responses like `json`, `html`, `text` ...etc.
Below are more details about the functionalities that the context provides you with:

### Get the URL parameters
`GetPathParam(key string)`
```go 
func SomeHandler(c *core.Context) {
    // route: example.com/users/:name
    name := c.GetPathParam("name")
}
```
### Get the request parameters
`GetRequestParam(key string)` to get the forms data (`post`, `get`, `put`,...etc)
```go 
func SomeHandler(c *core.Context) {
    // URL: example.com/users?name=jhon
    name := c.GetRequestParam("name")
    
    fmt.Println(name) // outputs john
}
```
### Check if a request parameter exists
`RequestParamExists(key string)` It check's if a request parameter exists, it returns `true` if it exists and `false` if it doesn't
```go 
func SomeHandler(c *core.Context) {
    // URL: example.com/users?name=jhon
    nameExists := c.RequestParamExists("name")
    if nameExists {
        // name exists
    }
}
```

### Gets the value of a request header
`GetHeader(key string)`
```go 
func SomeHandler(c *core.Context) {
    realIPAddress := c.GetHeader("X-Forwarded-For")
}
```

### Handle uploaded files
`GetUploadedFile(key string)` Returns information about the uploaded file like `name`, `path`
```go 
func SomeHandler(c *core.Context) {
    fileInfo, err := c.GetUploadedFile("key-name")
    fileInfo.FullPath // full path to the temporary location of the uploaded file
    fileInfo.Name // the name of the file
}
```
Where: 
`fileinfo` is an object that has general information about the uploaded file, here is all the file information that it provides:

- **fileInfo.FullPath**: full path to the temporary location of the uploaded file
- **fileInfo.Name**: the file name without the path
- **fileInfo.NameWithoutExtension**: the file name without extension
- **fileInfo.Extension**: the extension of the file
- **fileInfo.Size**: the file size in bytes

**Save uploaded file to a specific location:**
GoCondor stores all uploaded files in a temporary location, to save it to a specific location, you can simply move it using the function `MoveFile(srcPath, destPath, newFilename)`, here is how:
```go title="moving uploaded file to storage dir"
func SaveFile(c *core.Context) {
    fileinfo, err := c.GetUploadedFile("key-name")
    err := c.MoveFile(fileinfo.FullPath, "./storage/files", "myfile.pdf")
    if err != nil {
        // error moving the file
    }
}
```

### Move files from one location to another
`MoveFile(srcPath, destLocation, newFileName)` helps you move files from one location to another, it returns an error in case of any
```go 
func SomeHandler(c *core.Context) {
    err := c.MoveFile("./storage/myfile.paf", "./storage/pdfs/", "new-filename.pdf") 
}
```

### Copy files
`CopyFile(srcPath, destLocation, newFileName)` helps you copy files from one location to another, it returns an error in case of any
```go 
func SomeHandler(c *core.Context) {
    err := c.CopyFile("./storage/myfile.paf", "./storage/pdfs/", "new-filename.pdf") 
}
```

### Convert maps to json
`MapToJson(myMap map[string]interface{})` can help you convert maps to json
```go
func SomeHandler(c *core.Context) {
    jsonString := c.MapToJson(myMap)
}
```


### Get the project's base directory path
`GetBaseDirPath()` gives you the full path to the project's base directory bath in a string format
```go
func SomeHandler(c *core.Context) {
    path := c.GetBaseDirPath()
}
```

### Convert variables to strings
`CastToString(value interface{})` helps you convert variables to strings, it panics if the variable is not convertible to string
```go
func SomeHandler(c *core.Context) {
    str := c.CastToString(valueStr)
}
```

### Convert variables to int
`CastToInt(value interface{})` convert variables to `int` including `(int32, int64, ...etc)`, it panics if it's not convertible to `int`
```go
func SomeHandler(c *core.Context) {
    valueInt := c.CastToInt(valueStr)
}
```

### Convert variables to float
`CastToFloat(value interface{})` convert variables to `float64`, it panics if it's not convertible to `float64`
```go
func SomeHandler(c *core.Context) {
    valueFloat64 := c.CastToFloat(value)
}
```
