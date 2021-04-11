---
title: Gin Context
---

Gin Context is a struct that provides you with all the functionalities and information that you need to handle a request, it contains things like `headers`, `request data`, `attachments` and more, below are some methods provided in the context, for more check the [Gin Context Docs](https://pkg.go.dev/github.com/gin-gonic/gin#Context):

### Abort()
Prevents pending handlers/middlewares from being called
```go 
func SomeHandler(c *gin.Context) {
	c.Abort()
}
```

### AbortWithStatus(code int)
Prevents pending handlers/middlewares from being called and writes headers with the given status code
```go 
func SomeHandler(c *gin.Context) {
	c.AbortWithStatus(http.StatusBadRequest)
}

```

### AbortWithStatusJSON(code int, jsonObj interface{})
Prevents pending handlers/middlewares from being called and writes headers with the given status code and returns a `json` body as well
```go 
func SomeHandler(c *gin.Context) {
	c.AbortWithStatusJSON(http.StatusInternalServerError, gin.H{"message": "something went wrong"})
}

```

### IsAborted()
Returns true if the current context was aborted.
```go 
func SomeHandler(c *gin.Context) {
	c.IsAborted()
}
```

### Set(key string, value interface{})
Stores a new key/value pair exclusively for this context.
```go 
func SomeHandler(c *gin.Context) {
	c.Set("mykey", "my value")
}
```

### Get(key string)
Returns the value for the given key, ie: (value, true).  If the value does not exist it returns (nil, false)
```go 
func SomeHandler(c *gin.Context) {
	c.Get("mykey")
}
```

### MustGet(key string)
Returns the value for the given key if it exists, otherwise it panics.
```go 
func SomeHandler(c *gin.Context) {
	c.MustGet("mykey")
}
```

### GetString(key string) (s string) 
Returns the value associated with the key as a string.
```go 
func SomeHandler(c *gin.Context) {
	c.GetString("mykey")
}
```

###  GetBool(key string) (b bool)
Returns the value associated with the key as boolean.
```go 
func SomeHandler(c *gin.Context) {
	c.GetBool("mykey")
}
```

###  GetInt(key string) (i int)
Returns the value associated with the key as an integer.
```go 
func SomeHandler(c *gin.Context) {
	c.GetInt("mykey")
}
```

###  GetInt64(key string) (i64 int64)
Returns the value associated with the key as an int64.
```go 
func SomeHandler(c *gin.Context) {
	c.GetInt64("mykey")
}
```

###  GetFloat64(key string) (f64 float64)
Returns the value associated with the key as a float64
```go 
func SomeHandler(c *gin.Context) {
	c.GetFloat64("mykey")
}
```

### Param(key string) string
Returns the value of the URL parameter.
```go 
func SomeHandler(c *gin.Context) {
	# router.GET("/user/:id, handlers.SomeHandler)
	id := c.Param("id")
}
```

### Query(key string) string
Returns the keyed url query value if it exists
```go 
func SomeHandler(c *gin.Context) {
	#  GET /path?id=1234&name=Manu
	id := c.Query("id")
	name := c.Query("name")
}
```

### DefaultQuery(key, defaultValue string) string
Returns the keyed url query value if it exists, otherwise it returns the specified defaultValue string.
```go 
func SomeHandler(c *gin.Context) {
	#  GET /path?name=Manu
	name := c.DefaultQuery("name", "jack")
}
```

### QueryMap(key string) map[string]string
Returns a map for a given query key.
```go 
func SomeHandler(c *gin.Context) {
	c.QueryMap("key")
}
```

### PostForm(key string) string
Returns the specified key from a POST urlencoded form or multipart form when it exists, otherwise it returns an empty string
```go 
func SomeHandler(c *gin.Context) {
	c.PostForm("key")
}
```
### DefaultPostForm(key, defaultValue string) string
Returns the specified key from a POST urlencoded form or multipart form when it exists, otherwise it returns the specified defaultValue string.
```go 
func SomeHandler(c *gin.Context) {
	key := c.PostForm("key", "default value")
}
```

### MultipartForm() (\*multipart.Form, error)
MultipartForm is the parsed multipart form, including file uploads
```go 
func SomeHandler(c *gin.Context) {
	form := c.MultipartForm()
}
```

### SaveUploadedFile(file \*multipart.FileHeader, dst string) error
Saves the uploaded form file to specific destination.
```go 
func SomeHandler(c *gin.Context) {
	err := c.SaveUploadedFile(file, dest)
}
```

### Bind(obj interface{}) error
Fills the given object with the request data
```go 

func SomeHandler(c *gin.Context) {
	var obj Object
	err := c.Bind(&obj)
}
```

### BindJSON(obj interface{}) error
Fills the given object with the request `json` data 
```go 

func SomeHandler(c *gin.Context) {
	var obj Object
	err := c.BindJSON(&obj)
}
```

### BindXML(obj interface{}) error
Fills the given object with the request `xml` data 
```go 

func SomeHandler(c *gin.Context) {
	var obj Object
	err := c.BindXML(&obj)
}
```

### BindQuery(obj interface{}) error
Fills the given object with the request `query` data 
```go 

func SomeHandler(c *gin.Context) {
	var obj Object
	err := c.BindQuery(&obj)
}
```

### BindYAML(obj interface{}) error
Fills the given object with the request `yaml` data 
```go 

func SomeHandler(c *gin.Context) {
	var obj Object
	err := c.BindYAML(&obj)
}
```

### BindHeader(obj interface{}) error
Fills the given object with the request `header` data 
```go 

func SomeHandler(c *gin.Context) {
	var obj Object
	err := c.BindHeader(&obj)
}
```

### ClientIP() string
Implements the best effort algorithm to return the real client IP, it parses X-Real-IP and X-Forwarded-For in order to work properly with reverse-proxies such us: nginx or haproxy. Use X-Forwarded-For before X-Real-Ip as nginx uses X-Real-Ip with the proxy's IP.
```go 

func SomeHandler(c *gin.Context) {
	ip := c.ClientIP()
}
```

### IsWebsocket() bool
Returns true if the request headers indicate that a websocket handshake is being initiated by the client.
```go 

func SomeHandler(c *gin.Context) {
	yes := c.IsWebsocket()
}
```

### Header()
Writes a header (key, value) in the response 
```go 

func SomeHandler(c *gin.Context) {
	c.Header("key", "value")
}
```

### SetCookie(name, value string, maxAge int, path, domain string, secure, httpOnly bool)
Sets a cookie
```go 

func SomeHandler(c *gin.Context) {
	c.SetCookie(name, value string, maxAge int, path, domain string, secure, httpOnly bool)
}
```

### Cookie(name string) (string, error)
Returns the named cookie provided in the request or if not found.
```go 

func SomeHandler(c *gin.Context) {
	val, err := c.Cookie("name")
}
```

###  HTML(code int, name string, obj interface{})
Passes the `obj` to the given HTML template then it renders it.
```go 

func SomeHandler(c *gin.Context) {
	c.HTML(
		http.StatusOK, "index.html", gin.H{
			"message": "this is a message"
		})
}
```


###  JSON(code int, obj interface{})
Renders the given `obj` as json
```go 

func SomeHandler(c *gin.Context) {
	c.JSON(
		http.StatusOK, gin.H{
			"message": "this is a message"
		})
}
```

###  XML(code int, obj interface{})
Renders the given `obj` as XML
```go 

func SomeHandler(c *gin.Context) {
	c.XML(
		http.StatusOK, gin.H{
			"message": "this is a message"
		})
}
```

###  XML(code int, obj interface{})
Renders the given `obj` as YAML
```go 

func SomeHandler(c *gin.Context) {
	c.YAML(
		http.StatusOK, gin.H{
			"message": "this is a message"
		})
}
```

### File(filepath string)
Writes the specified file into the body stream
```go 

func SomeHandler(c *gin.Context) {
	c.File(filepath)
}
```

### FileAttachment(filepath, filename string)
Writes the specified file into the body stream with the given name
```go 

func SomeHandler(c *gin.Context) {
	c.File(filepath, filename)
}
```
for more methods and information check the [Gin Context Docs](https://pkg.go.dev/github.com/gin-gonic/gin#Context):

