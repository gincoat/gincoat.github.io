---
title: JWT Tokens
---

JWT
JWT tokens are used for authentication, Gincoat provides you with ways to generate `jwt tokens`, `refresh tokens` and a way to validate them
the configuration for JWT can be found in the `.env` file, there is a section for that where you can set the `secret` key and the `validity` of the tokens

### Generate JWT Token
to generate a `jwt token` you can simply use the context variable `jwt`, here is an example of how you can do that, let's assume that there is a handler function with the name `JwtTokenCreate` which is responsible for generating the `jwt` token.
```go
func JwtTokenCreate(c *gin.Context) {
	jwt := c.MustGet(core.JWT).(*jwtloader.JwtLoader)

	payload := map[string]string{"userId": "123"}
	token, err := jwt.CreateToken(payload)
}
```

### Decode a token
to decode a token and extract the encoded information, you can do it like below:
```go
func JwtTokenValidate(c *gin.Context) {
	jwt := c.MustGet(core.JWT).(*jwtloader.JwtLoader)

	// first let's extract the token from the request header
	token, error := jwt.ExtractToken(c)

	// decode
	payload, err := jwt.DecodeToken(token)
}
```


### Generate JWT Refresh Token
here is how you can generate a `jwt refresh` token defined in a handler function with the name `JwtTokenCreateRefresh`
```go
func JwtTokenCreateRefresh(c *gin.Context) {
	jwt := c.MustGet(core.JWT).(*jwtloader.JwtLoader)
	token, err := jwt.CreateRefreshToken(map[string]string{"userId": "123"})
}
```
Note:
`.(*jwtloader.JwtLoader)` is how you do type assurance in go

### Validate a token
to check if a token is valid or not you can do it like below: 
```go
func JwtTokenValidate(c *gin.Context) {
	jwt := c.MustGet(core.JWT).(*jwtloader.JwtLoader)

	// first let's extract the token from the request header
	token, error := jwt.ExtractToken(c)

	// validate
	ok, err := jwt.ValidateToken(token)
}
```
