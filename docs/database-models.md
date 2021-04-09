---
title: Models
---

Models are representations of your database tables and the information that they hold, the help you manipulate the information of these tables, Models are basic go struct, all models lives in the folder `models` at the root of your app, here is how you can declare a model that represents `Users` table:
```go
type User struct {
  ID           uint
  Name         string
  Email        *string
  Age          uint8
  Birthday     *time.Time
  MemberNumber sql.NullString
  ActivatedAt  sql.NullTime
  CreatedAt    time.Time
  UpdatedAt    time.Time
}
```
Next we need to tell `GoCondor` to auto migrate the model you can learn more about auto migration at [GORM auto migration docs](https://gorm.io/docs/migration.html), you can do that by adding the line `db.AutoMigrate(&User{})` to the function `MigrateDB()` in the file `models/migration.go`, make sure the function looks like below:
```go
func MigrateDB() {
	db := database.Resolve()
	// Add your models to be auto migrated here
	db.AutoMigrate(&User{})
}
```

for more information about the models check [GORM Models Docs](https://gorm.io/docs/models.html)
