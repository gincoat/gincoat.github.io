---
title: CRUD Operations
---

To perform operations on your database first make sure `Database` is enabled in the `Features` struct which located at `config/features.go`, then add the database connection information in the `.env` file.
All operations are performed with a database variable named `DB` which is available to your handlers since it's set in the file `http/handlers/deps.go`

## Create 
Here is an example of how you can create a database record 
```go
func SomeHandler(c *gin.Context) {
	user := User{Name: "Jack", Age: 28, Birthday: time.Now()}
	result := DB.Create(&user) // pass pointer of data to Create

	user.ID             // returns inserted data's primary key
	result.Error        // returns error
	result.RowsAffected // returns inserted records count
}
```

## Read
Here is how you can read records
```go
func SomeHandler(c *gin.Context) {
	var user User
	DB.First(&user, 1) // find user with integer primary key
  	DB.First(&user, "email = ?", "jack@mail.com") // find user with email jack@mail.com

  	// Get the first record ordered by primary key
	DB.First(&user)
	// SELECT * FROM users ORDER BY id LIMIT 1;

	// Get one record, no specified order
	DB.Take(&user)
	// SELECT * FROM users LIMIT 1;

	// Get last record, order by primary key desc
	DB.Last(&user)
	// SELECT * FROM users ORDER BY id DESC LIMIT 1;

	result := DB.First(&user)
	result.RowsAffected // returns found records count
	result.Error        // returns error

	// check error ErrRecordNotFound
	errors.Is(result.Error, gorm.ErrRecordNotFound)

	// Get all records
	var users []User
	result := DB.Find(&users)
	// SELECT * FROM users;

	result.RowsAffected // returns found records count, equals `len(users)`
	result.Error        // returns error

}
```
For more advanced queries check [GORM advanced queries docs](https://gorm.io/docs/advanced_query.html)

## Update
Here is how you can update a record 
```go
func SomeHandler(c *gin.Context) {
	var user User
	DB.First(&user)

	user.Name = "Joe"
	user.Age = 100
	DB.Save(&user)
}
```

## Delete
Here is how you can delete records:
```go
func SomeHandler(c *gin.Context) {
	DB.Delete(&User{}, 10)
	// DELETE FROM users WHERE id = 10;

	DB.Delete(&User{}, "10")
	// DELETE FROM users WHERE id = 10;

	DB.Delete(&users, []int{1,2,3})
	// DELETE FROM users WHERE id IN (1,2,3);
}
```
