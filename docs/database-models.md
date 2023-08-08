---
title: Models
---

Models are located in the directory `models`
Below an example of a `users` model
```go title="models/user.go"
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
#### Database auto-migration
After creating your models you need to add them to the `runAutoMigrations()` function which located in the file `run-auto-migrations.go` in the root directory
Here is how:
```go
package main

import (
    "github.com/gocondor/core"
    "github.com/gocondor/[my-project]/models"
)

func runAutoMigrations() {
    db := core.ResolveGorm()
    //##############################
    //# Models auto migration  #####
    //##############################

    // Add models to be auto-migrated here...
    db.AutoMigrate(&models.User{})
}
```
For more information about the models check [GORM Models Docs](https://gorm.io/docs/models.html)
