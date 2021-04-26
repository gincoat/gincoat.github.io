---
title: JWT Tokens
---

JWT tokens are used for authentication, GoCondor provides you with ways to generate `jwt tokens`, `refresh tokens` and validatation of them.
The configuration for JWT can be found in the `.env` file, this is where you can set things like the `secret` key and the `validity` of the tokens

### Generate JWT token
To generate a `jwt token` you can simply use the method `CreateToken` in the variable `JWT`, the variable `JWT` is available to the all your handlers, it's set in the file `http/handlers/deps.go`. here is how you can generate a token with the payload having the user id:
```go
func SomeHandler(c *gin.Context) {
	payload := map[string]string{"userId": "123"}
	token, err := JWT.CreateToken(payload)
}
```
### Extract authorization token from header
To extract the token you use the method `JWT.ExtractToken(context)` it accepts the context variable, it assumes the token is set in the header with the key `Authorization` and the value is in this format `bearer: your-token-here`, here is how you can do it:
```go
func SomeHandler(c *gin.Context) {
	token, error := JWT.ExtractToken(c)
}
```

### Decode a token
To decode a token and extract the encoded information, you can do it like below:
```go
func SomeHandler(c *gin.Context) {
	// first let's extract the token from the request header
	token, error := JWT.ExtractToken(c)

	// decode
	payload, err := JWT.DecodeToken(token)
}
```


### Generate JWT refresh token
You can generate a jwt refresh token using the method `CreateRefreshToken`, here is how:
```go
func SomeHandler(c *gin.Context) {
	payload := map[string]string{"userId": "123"}
	token, err := JWT.CreateRefreshToken(payload)
}
```

### Validate a token
To check if a token is valid or not you can do it like below: 
```go
func SomeHandler(c *gin.Context) {
	// first let's extract the token from the request header
	token, error := JWT.ExtractToken(c)

	// validate
	ok, err := JWT.ValidateToken(token)
}
```
