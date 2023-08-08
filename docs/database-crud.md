---
title: CRUD Operations
---

To perform operations on your database first make sure `database` is enabled in the `config/gorm.go`

## Create
Here is an example of how you can create a database record 
```go
package handlers

import (
    "fmt"

    "github.com/gocondor/core"
    "github.com/gocondor/[my-project]/models"
)

func Signup(c *core.Context) *core.Response {
    db := c.GetGorm()
    hashedPassword, _ := c.GetHashing().HashPassword("my-password")
    user := models.User{
        Name:     "Jack", 
        Email:    "mail@example.com", 
        Password: hashedPassword,
    }
    result := db.Create(&user) // pass pointer
    // user.ID: the inserted record primary key
    // result.Error: returned error if any
}
```
More information is available at [gorm record creating docs](https://gorm.io/docs/create.html)

## Read
Here is how you can read records from the database
```go
func SomeHandler(c *core.Context) {
    var user User
    result := DB.First(&user, 1) // find user id 1
    // result.RowsAffected: found records count
    // result.Error: if there is any error
    errors.Is(result.Error, gorm.ErrRecordNotFound) // if record not found, the error ErrRecordNotFound is returned

    DB.Where("email = ?", "mail@mail.com").First(&user),  // find the first user with email mail@mail.com

    // Get the first record you find (ordered by primary key)
    DB.First(&user) // SELECT * FROM users ORDER BY id LIMIT 1;

    // Get one record, no specified order
    DB.Take(&user) // SELECT * FROM users LIMIT 1;

    // Get the last record ordered by primary key desc
    DB.Last(&user) // SELECT * FROM users ORDER BY id DESC LIMIT 1;

    // Get all records
    var users []User
    result := DB.Find(&users) // SELECT * FROM users;
}
```
More information is available at [gorm records creating docs](https://gorm.io/docs/query.html)

For more advanced queries check [GORM advanced queries docs](https://gorm.io/docs/advanced_query.html)

## Update
Here is how you can update a record 
```go
func SomeHandler(c *core.Context) {
    var user User
    DB.First(&user)

    user.Name = "Joe"
    user.Age = 40
    DB.Save(&user) // Note: save creates the record if missing
}
```
More information is available at [gorm records updating docs](https://gorm.io/docs/update.html)

## Deleting
Here is how you can delete records:
```go
func SomeHandler(c *core.Context) {
    DB.Delete(&models.User{}, 10) // DELETE FROM users WHERE id = 10;
    
    DB.Delete(&models.users{}, []int{1,2,3}) // DELETE FROM users WHERE id IN (1,2,3)
}
```
More information is available at [gorm records deleting docs](https://gorm.io/docs/delete.html)

## Raw SQL
The docs are available at [gorm  raw sql docs](https://gorm.io/docs/sql_builder.html)

## Transactions
The docs are available at [gorm  transactions docs](https://gorm.io/docs/transactions.html)
