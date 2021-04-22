---
title: JWT Tokens
---

JWT tokens are used for authentication, GoCondor provides you with ways to generate `jwt tokens`, `refresh tokens` and validatation of these tokens
the configuration for JWT can be found in the `.env` file, there is a section for that where you can set the `secret` key and the `validity` of the tokens

### Generate JWT token
To generate a `jwt token` you can simply use the method `CreateToken` in the variable `JWT`, the variable `JWT` is available to the whole handlers package, it's set in the file `http/handlers/deps.go`, here is how you can generate a token with the payload having the user id:
```go
func JwtTokenCreate(c *gin.Context) {
	payload := map[string]string{"userId": "123"}
	token, err := JWT.CreateToken(payload)
}
```
### Extract authorization token from header
to extract the token you use the method `JWT.ExtractToken(context)` it accepts the context variable, it assumes the token is set in the header with the key `Authorization` and the value is in this format `bearer: your-token-here`, here is how you can do it:
```go
func JwtTokenCreate(c *gin.Context) {
	token, error := JWT.ExtractToken(c)
}
```

### Decode a token
To decode a token and extract the encoded information, you can do it like below:
```go
func JwtTokenValidate(c *gin.Context) {
	// first let's extract the token from the request header
	token, error := JWT.ExtractToken(c)

	// decode
	payload, err := JWT.DecodeToken(token)
}
```


### Generate JWT refresh token
You can generate a jwt refresh token using the method `CreateRefreshToken`, here is how:
```go
func JwtTokenCreateRefresh(c *gin.Context) {
	token, err := JWT.CreateRefreshToken(map[string]string{"userId": "123"})
}
```

### Validate a token
To check if a token is valid or not you can do it like below: 
```go
func JwtTokenValidate(c *gin.Context) {
	// first let's extract the token from the request header
	token, error := JWT.ExtractToken(c)

	// validate
	ok, err := JWT.ValidateToken(token)
}
```
