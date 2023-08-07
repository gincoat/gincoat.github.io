---
title: Validation
---
To access the validator call the function `GetValidator()` in the context object
The validator takes two parameters, the first parameters is a map of the data to validated, the second parameter is a map of the rules of validaton
Below is an example for validating an input of `email` and `password`
```go
func Login(c *core.Context) *core.Response {
	v := c.GetValidator()
	data := map[string]interface{}{
		"email":    "mail@example.com",
		"password": "secret",
	}
	rules := map[string]interface{}{
		"email":    "required|email",
		"password": "required|length:6,10",
	}
	vResult := v.Validate(data, rules)
	errorsJson := vResult.GetErrorMessagesJson()
	if vResult.Failed() {
		return c.Response.SetStatusCode(422).Json(errorsJson)
	}
	// Proceeed with logging in the user
}
```

#### Available Rules:

**`required`**
makes sure the field under validaton is not missing

**`email`**
makes sure the field under validaton is a valid email address

**`url`**
makes sure the field under validaton is a valid url

**`alpha`**
makes sure the field under validaton contains only valid aphabet 

**`digit`**
makes sure the field under validaton contains only valid numbers

**`alphaNumeric`**
makes sure the field under validaton contains aphabet letters and valid numbers only

**`lowerCase`**
makes sure the field under validaton contains lower case letters only

**`upperCase`**
makes sure the field under validaton contains uppercase only

**`int`**
makes sure the field under validaton is integer only

**`float`**
makes sure the field under validaton is float only

**`uuid`**
makes sure the field under validaton is avalid uuid

**`creditCard`**
makes sure the field under validaton is a valid credit card number

**`json`**
makes sure the field under validaton is a valid json string

**`base64`**
makes sure the field under validaton is a valid base64

**`countryCode2`**
makes sure the field under validaton is a valid iso country code of 2 letters

**`countryCode3`**
makes sure the field under validaton is a valid iso country code of 3 letters

**`isoCurrencyCode`**
makes sure the field under validaton is a valid iso currency code

**`mac`**
makes sure the field under validaton is a valid mac address

**`ip`**
makes sure the field under validaton is a valid ip address

**`ipv4`**
makes sure the field under validaton is a valid ip address version 4

**`ipv6`**
makes sure the field under validaton is a valid ip address version 6

**`subdomain`**
makes sure the field under validaton is a valid subdomain

**`domain`**
makes sure the field under validaton is a valid domain

**`dnsName`**
makes sure the field under validaton is a valid dns name

**`host`**
makes sure the field under validaton is a valid host

**`port`**
makes sure the field under validaton is a valid port number

**`mongoID`**
makes sure the field under validaton is a valid mongoDB id

**`latitude`**
makes sure the field under validaton is a valid latitude

**`longitude`**
makes sure the field under validaton is a valid longitude

**`ssn`**
makes sure the field under validaton is a valid ssn

**`semver`**
makes sure the field under validaton is a semantic version number

**`min:`**
makes sure the field under validaton is a number with a minimum value of whats set.
Example: `min:5`
this makes sure the value under validation is a number with a minimum value of `5`

**`max:`**
makes sure the field under validaton is a number with a max value of whats set.
Example: `max:5`
this makes sure the value under validation is a number with a max value of `5`


**`in:`**
makes sure the field under validaton is a one of the values that are set.
Example: `in:USD,EUR,AED`. 
this makes sure the value under validation is is either `USD` or `EUR` or `AED`

**`dateLayout:`**
makes sure the field under validaton is a valid date with the given layout.
Example: `dateLayout:2006-01-02T15:04:05`

**`length:`**
makes sure the length (`number of letters`) of the field under validaton is within the given range. 
Example: `length:5,7`
