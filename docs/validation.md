---
title: Validation and Input Binding
---

Validation takes place when you fill (bind) a given struct with your request data, this struct could be any of your database models which live in the directory `models`, or any of your input model which lives in `httpd/input/input.go`, the input models are simply an intermediate models that used only for validation, you can use them when you don't want to fill your database models with the request data.

#### How to define validation rules
Validation rules are defined using the struct tag `binding`, here is an example of how you can define them for a user struct
```go
type User struct {
	Name string `json: "name" form: "name" binding:"exists,alphanum"`
	Age  int    `json: "age"  form: "age"  binding:"exists,alphanum,gte=18"`
}
```
Note: 
- the tags `json` and `form` indicate the type of content of the input (the request) that we are binding from, for the above example it means, if the content type of the input is `json` populate the struct's variable `Name` with the value from the json's key `name`, and the same thing for `Age`
- the tag `binding` indicates the validation rules.

#### Execute the validation
to execute the validation you simply need to bind the request data to your struct using the method `ShouldBind(&var)`, or if you are sure what is the type of content of the request, you can use the proper method which is one of these 'ShouldBind(&var)', ShouldBindJSON(&var), ShouldBindXML(&var), ShouldBindQuery(&var), ShouldBindYAML(&var), ShouldBindHeader(&var).
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
