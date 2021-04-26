---
title: Validation and Input Binding
---

Validation takes place when you fill (bind) a given struct with your request data, this struct could be any of your database models which live in the directory `models`, or any of your input model which lives in `httpd/input/input.go`, the input models are simply an intermediate structs used only for validation, you can use them when you don't want to fill your database models with the request data.
the Validation is based on the package [go-playground/validator.v8](https://pkg.go.dev/gopkg.in/go-playground/validator.v8)

### How to define validation rules
Validation rules are defined using the struct tag `binding`, here is an example of how you can define them for a user struct
```go
type User struct {
	Name string `json: "name" form: "name" binding:"required,alphanum"`
	Age  int    `json: "age"  form: "age"  binding:"required,numeric,gte=18"`
}
```
Note: 
- the tags `json` and `form` indicate the type of content of the input (the request) that we are binding from, for the above example it means, if the content type of the input is `json` populate the struct's variable `Name` with the value from the json's key `name`, and the same thing for `Age`
- the tag `binding` indicates the validation rules.

### Execute the validation
To execute the validation you simply need to bind the request data to your struct using the method `ShouldBind(&var)`, or if you are sure what is the type of content of the request, you can use the proper method which is one of these ShouldBindJSON(&var), ShouldBindXML(&var), ShouldBindQuery(&var), ShouldBindYAML(&var), ShouldBindHeader(&var).
As you can see all these methods a pointer to a declared variable of the type of your struct.
If validation failed, an error will be returned, here is an example of how we can bind and validate the request data to the above struct 
```go
func SomeHander(c *gin.Context) {
	var user User
	err := c.ShouldBindJSON(&user)
	if err != nil {
		// validation failed
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// validation passed, the variable user is filled with the request data
	fmt.Println(user)
}
```

### Validation rules 
here is a list of supported validation rules
#### required
This validates that the value is not the data types default zero value. For numbers ensures value is not zero. For strings ensures value is not "". For slices, maps, pointers, interfaces, channels and functions ensures the value is not nil.
```go
type User struct {
	Name string `binding:"required"`
}
```

#### len
For numbers, max will ensure that the value is equal to the parameter given. For strings, it checks that the string length is exactly that number of characters. For slices, arrays, and maps, validates the number of items.
```go
type User struct {
	Name string `binding:"len=10"`
}
```

#### Maximum 
For numbers, max will ensure that the value is less than or equal to the parameter given. For strings, it checks that the string length is at most that number of characters. For slices, arrays, and maps, validates the number of items.
```go
type User struct {
	Name string `binding:"max=10"`
}
```

#### Mininum 
For numbers, min will ensure that the value is greater or equal to the parameter given. For strings, it checks that the string length is at least that number of characters. For slices, arrays, and maps, validates the number of items.
```go
type User struct {
	Name string `binding:"min=10"`
}
```

#### Equals 
For strings & numbers, eq will ensure that the value is equal to the parameter given. For slices, arrays, and maps, validates the number of items.
```go
type User struct {
	Name string `binding:"eq=10"`
}
```

#### Not Equal  
For strings & numbers, ne will ensure that the value is not equal to the parameter given. For slices, arrays, and maps, validates the number of items.
```go
type User struct {
	Name string `binding:"ne=10"`
}
```

#### Greater Than
For numbers, this will ensure that the value is greater than the parameter given. For strings, it checks that the string length is greater than that number of characters. For slices, arrays and maps it validates the number of items.
```go
type User struct {
	Name string `binding:"gt=10"`
}
```

#### Greater Than or Equal
Same as 'min' above. Kept both to make terminology with 'len' easier.
```go
type User struct {
	Name string `binding:"gte=10"`
}
```

#### Less Than
For numbers, this will ensure that the value is less than the parameter given. For strings, it checks that the string length is less than that number of characters. For slices, arrays, and maps it validates the number of items.
```go
type User struct {
	Name string `binding:"lt=10"`
}
```

#### Less Than or Equal
Same as 'max' above. Kept both to make terminology with 'len' easier.
```go
type User struct {
	Name string `binding:"lte=10"`
}
```

#### Field Equals Another Field
This will validate the field value against another fields value either within a struct or passed in field.
```go
type User struct {
	Password string `binding:"eqfield=ConfirmPassword"`
}
```

#### Alpha Only
This validates that a string value contains alpha characters only
```go
type User struct {
	Name string `binding:"alpha"`
}
```

#### Alphanumeric 
This validates that a string value contains alphanumeric characters only
```go
type User struct {
	Name string `binding:"alphanum"`
}
```

#### Numeric  
This validates that a string value contains a basic numeric value. basic excludes exponents etc...
```go
type User struct {
	Name string `binding:"numeric"`
}
```

#### RGB String  
This validates that a string value contains a valid rgb color
```go
type User struct {
	ProfileColor string `binding:"rgb"`
}
```

#### RGBA String  
This validates that a string value contains a valid rgba color
```go
type User struct {
	ProfileColor string `binding:"rgba"`
}
```

#### E-mail String  
This validates that a string value contains a valid email This may not conform to all possibilities of any rfc standard, but neither does any email provider accept all posibilities.
```go
type User struct {
	Email string `binding:"email"`
}
```

#### URL String  
This validates that a string value contains a valid url This will accept any url the golang request uri accepts but must contain a schema for example http:// or rtmp://
```go
type User struct {
	Website string `binding:"url"`
}
```

For more validation rules please check the [Validatior package docs](https://pkg.go.dev/gopkg.in/go-playground/validator.v8#hdr-Baked_In_Validators_and_Tags)