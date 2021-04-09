---
title: CRUD Operations
---

To perform operations on your database first make sure `Database` is enabled in the `Features` struct which located at `config/features.go`, then add the database connection information in the `.env` file.
All operations are performed with a database variable named `db` which you can be retrieved from the context using the below code
```go
	db := c.MustGet(core.GORM).(*gorm.DB)
```

## Create 
Here is an example of how you can create a database record 
```go
func SomeHandler(c *gin.Context) {
	db := c.MustGet(core.GORM).(*gorm.DB)

	user := User{Name: "Jack", Age: 28, Birthday: time.Now()}
	result := db.Create(&user) // pass pointer of data to Create

	user.ID             // returns inserted data's primary key
	result.Error        // returns error
	result.RowsAffected // returns inserted records count
}
```

## Read
Here is how you can read records
```go
func SomeHandler(c *gin.Context) {
	db := c.MustGet(core.GORM).(*gorm.DB)

	var user User
	db.First(&user, 1) // find user with integer primary key
  	db.First(&user, "email = ?", "jack@mail.com") // find user with email jack@mail.com

  	// Get the first record ordered by primary key
	db.First(&user)
	// SELECT * FROM users ORDER BY id LIMIT 1;

	// Get one record, no specified order
	db.Take(&user)
	// SELECT * FROM users LIMIT 1;

	// Get last record, order by primary key desc
	db.Last(&user)
	// SELECT * FROM users ORDER BY id DESC LIMIT 1;

	result := db.First(&user)
	result.RowsAffected // returns found records count
	result.Error        // returns error

	// check error ErrRecordNotFound
	errors.Is(result.Error, gorm.ErrRecordNotFound)
}
```
For more advanced queries check [GORM advanced queries docs](https://gorm.io/docs/advanced_query.html)

## Update
Here is how you can update a record 
```go
func SomeHandler(c *gin.Context) {
	var user User
	db.First(&user)

	user.Name = "Joe"
	user.Age = 100
	db.Save(&user)
}
```

## Delete
Here is how you can delete records:
```go
func SomeHandler(c *gin.Context) {
	db.Delete(&User{}, 10)
	// DELETE FROM users WHERE id = 10;

	db.Delete(&User{}, "10")
	// DELETE FROM users WHERE id = 10;

	db.Delete(&users, []int{1,2,3})
	// DELETE FROM users WHERE id IN (1,2,3);
}
```
