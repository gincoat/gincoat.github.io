---
title: Request
---
All request information like `form data`, `uploaded files`, `headers`,...etc can be accessed using the context.

### URL Parameters
URL path parameters can be defined by prefixing the parameter name with `:`. 
Here is an example of defining a path parameter
```go title="file: routes.go"
router.Get("users/:id", handlers.GetUsers)
```
Here is an example of accessing it
```go title="file handlers/users.go"
func GetUsers(c *core.Context) {
    userID := c.GetPathParam("id")
}

```

### Query and form post parameters
Query parameters are passed to the URL like this `/users?name=jack`, both query parameters and the form post data can be accessed with the function `GetRequestParam("PARAM_NAME")`, here is an example:
```go
func listUsers(c *core.Context) {
    name := c.GetRequestParam("name")
    PostParam:= c.GetRequestParam("PARAM_KEY")
}
```

### Form uploaded files:
Here is how you can access the form uploaded file
```go
func saveFile(c *core.Context) {
    fileInfo, err := c.GetUploadedFile("uploaded-file-key-name")
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


### Save uploaded file:
GoCondor stores all uploaded files in a temporary location, to save it to a specific location, you can simply move it using the function `MoveFile(srcPath, destPath, newFilename)`, here is how:
```go title="moving uploaded file to storage dir"
func SaveFile(c *core.Context) {
    fileinfo, err := c.GetUploadedFile("uploaded-file-key-name")
    err := c.MoveFile(fileinfo.FullPath, "./storage/files", "myfile.pdf")
}
```

### Header Data:
Here is how you can get headers:
```go
func ListTodos(c *core.Context) {
    tokenStr := c.GetHeader("Authorization")
}
```
