---
title: Validation
---
To access the validator call the function `GetValidator()` in the context object
The validator takes two parameters, the first parameter is a map of the data to be validated, and the second parameter is a map of the rules of validation
Below is an example for validating an input of `email` and `password`
```go
func Login(c *core.Context) *core.Response {
    v := c.GetValidator()
    // the data
    data := map[string]interface{}{
        "email":    "mail@example.com",
        "password": "secret",
    }
    // the validation rules
    rules := map[string]interface{}{
        "email":    "required|email",
        "password": "required|length:6,10",
    }
    // Validate
    vResult := v.Validate(data, rules)
    // check to see if validation failed
    if vResult.Failed() {
        // get error messages in json format
        errorsJson := vResult.GetErrorMessagesJson()
        return c.Response.SetStatusCode(422).Json(errorsJson)
    }
    // Proceed with logging in the user
}
```

#### Available Rules:

**`required`**
makes sure the field under validation is not missing

**`email`**
makes sure the field under validation is a valid email address

**`url`**
makes sure the field under validation is a valid URL

**`alpha`**
makes sure the field under validation contains only valid alphabet 

**`digit`**
makes sure the field under validation contains only valid numbers

**`alphaNumeric`**
makes sure the field under validation contains alphabet letters and valid numbers only

**`lowerCase`**
makes sure the field under validation contains lower case letters only

**`upperCase`**
makes sure the field under validation contains uppercase only

**`int`**
makes sure the field under validation is integer only

**`float`**
makes sure the field under validation is float only

**`uuid`**
makes sure the field under validation is a valid uuid

**`creditCard`**
makes sure the field under validation is a valid credit card number

**`json`**
makes sure the field under validation is a valid json string

**`base64`**
makes sure the field under validation is a valid base64

**`countryCode2`**
makes sure the field under validation is a valid iso country code of 2 letters

**`countryCode3`**
makes sure the field under validation is a valid iso country code of 3 letters

**`isoCurrencyCode`**
makes sure the field under validation is a valid iso currency code

**`mac`**
makes sure the field under validation is a valid mac address

**`ip`**
makes sure the field under validation is a valid ip address

**`ipv4`**
makes sure the field under validation is a valid ip address version 4

**`ipv6`**
makes sure the field under validation is a valid ip address version 6

**`subdomain`**
makes sure the field under validation is a valid subdomain

**`domain`**
makes sure the field under validation is a valid domain

**`dnsName`**
makes sure the field under validation is a valid dns name

**`host`**
makes sure the field under validation is a valid host

**`port`**
makes sure the field under validation is a valid port number

**`mongoID`**
makes sure the field under validation is a valid mongoDB id

**`latitude`**
makes sure the field under validation is a valid latitude

**`longitude`**
makes sure the field under validation is a valid longitude

**`ssn`**
makes sure the field under validation is a valid ssn

**`semver`**
makes sure the field under validation is a semantic version number

**`min:`**
makes sure the field under validation is a number with a minimum value of what's set.
Example: `min:5`
this makes sure the value under validation is a number with a minimum value of `5`

**`max:`**
makes sure the field under validation is a number with a max value of what's set.
Example: `max:5`
this makes sure the value under validation is a number with a max value of `5`


**`in:`**
makes sure the field under validation is one of the values that are set.
Example: `in:USD,EUR,AED`. 
this makes sure the value under validation is either `USD` or `EUR` or `AED`

**`dateLayout:`**
makes sure the field under validation is a valid date with the given layout.
Example: `dateLayout:2006-01-02T15:04:05`

**`length:`**
makes sure the length (`number of letters`) of the field under validation is within the given range. 
Example: `length:5,7`
