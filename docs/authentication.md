---
title: Authentication
---

GoCondor comes with a built-in users authentication feature, you can turn it on by uncommenting the auth related routes in `routes.go`, the authentication feature consists of the following features:
- registration
- signin
- reset password
- signout
- auth check middleware to protect from none authenticated users `middlewares/auth-check.go`
### Enabling the authentication
You can simply enable the authentication by uncommenting the following routes in the file `routes.go`:
- router.Post("/signup", handlers.Signup)
- router.Post("/signin", handlers.Signin)
- router.Post("/signout", handlers.Signout)
- router.Post("/reset-password", handlers.ResetPasswordRequest)
- router.Post("/reset-password/code/:code", handlers.SetNewPassword)
- router.Get("/dashboard", handlers.WelcomeToDashboard, middlewares.AuthCheck) // temp protected route

### Updating the registration fields
The registration route supports three fields:
- name
- email
- password
to modify or add new fields you will have to modify the `signup` handler function in `handlers/authentication.go`

First, you need to add the filed to the `User` model in the file `models/user.go`, here is how the file looks like
```go
// Copyright 2023 Harran Ali <harran.m@gmail.com>. All rights reserved.
// Use of this source code is governed by MIT-style
// license that can be found in the LICENSE file.

package models

import "gorm.io/gorm"

type User struct {
    gorm.Model
    Name     string
    Email    string
    Password string
}

// Override the table name
func (User) TableName() string {
    return "users"
}

```
Next, grab the filed from the request data like below
```go
name := c.GetRequestParam("name")
email := c.GetRequestParam("email")
password := c.GetRequestParam("password")
```
Next, add the filed to the validation struct like below
```go
// validation data
data := map[string]interface{}{
    "name":     name,
    "email":    email,
    "password": password,
}
```
Next, add the validation rules for the filed like below
```go
// validation rules
rules := map[string]interface{}{
    "name":     "required|alphaNumeric",
    "email":    "required|email",
    "password": "required|length:6,10",
}
```
Next, add the filed to the `User` struct instance to be stored in the database like below
```go
user = models.User{
    Name:     c.CastToString(name),
    Email:    c.CastToString(email),
    Password: passwordHashed,
}
res = c.GetGorm().Create(&user)
```
