---
title: Authentication
---

GoCondor comes with a built-in users' authentication feature, you can turn it on by setting the flag `authentication` in `config.features.go` to true, it comes with `registration`, `login`, and `logout` routes plus a helper package `auth` to help you check authenticated users and perform other actions on them.

### Using the authentication feature
to use the authentication feature to need to set the following flags in `config/features.go` to `true`
1. `Database`
2. `Sessions`
3. `Authentication`

### Routes
There are 3 routes defined with their logic
1. Post => `/register`, to perform users registration, it accepts the following fields:
- `name`
- `email`
- `password`

2. Post => `/login`, to log users in, it accepts:
- `email`
- `password`

It returns `jwt` token and `jwt refresh token` in the response, the `jwt` token has to be sent in every request that needs to be authenticated, it has to be present in headers in the format: `Authorization` as the key and `bearer: the-user-token` as the value.

Sample response:
```json
{
    "data": {
        "refreshToken": "eyJhbGciSiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MjA1MDUwMjMsInVzZXJJRCI6NX0.JuIzV3it-FyK-yXkFUB4PfxX0zqFACFuG-ysfGvOWJE",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JpemVkIjp0cnVlLCJleHAiOjE2MjA0MjIyMjMsInVzZXcJRCI6NX0.56GjsF9Px9nAlfbYVBMmphLMEDRVI5NeqJ9NghWksI8"
    }
}
```

3. Get => `/logout`, to log users out, it accepts `jwt` token in the header

### Adding fields to the registration
To add fields to the registration you just need to make one simple change, you just need to add your fields with their validation tags to the user's model `models/user.go` and every thing will be taken care of for you automatically.

### Updating the logic
If you ever needed to make changes to the logic, the files are located in `http/authentication`


### Check if a user is logged in
Here is how you can check if a user is logged in:
```go
func SomeHandler(c *core.Context) {
	Auth := auth.Resolve()
	ok, err := Auth.Check(c)
	if ok {
		// user is logged in
	}
}
```

### Get logged-in user's ID
Here is how you get the authenticated user's ID
```go
func SomeHandler(c *core.Context) {
	Auth := auth.Resolve()
	userID, err := Auth.UserID(c)
}
```
