---
title: Models
---

Models are representations of your database tables and the information that they hold. They help you manipulate the information of these tables, Models are basic Go structs, all models lives in the folder `models` at the root of your project, here is how you can declare a model that represents `Users` table:
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
Next we need to tell `GoCondor` to auto migrate the model you can learn more about auto migration at [GORM auto migration docs](https://gorm.io/docs/migration.html), you can do that by adding the line `DB.AutoMigrate(&User{})` to the function `MigrateDB()` in the file `models/migration.go`, make sure the function looks like below:
```go
func MigrateDB() {
	DB := database.Resolve()
	// Add your models to be auto migrated here
	DB.AutoMigrate(&User{})
}
```

for more information about the models check [GORM Models Docs](https://gorm.io/docs/models.html)
