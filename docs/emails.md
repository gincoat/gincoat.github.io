---
title: Sending Emails
---
GoCondor supports 3 different drivers for sending emails, `SMTP`, `SparkPost`, `SendGrid`, and `MailGun`.
The driver can be selected by setting the value of the variable `EMAILS_DRIVER` to either `smtp`, `sparkpost`, `sendgrid`, or `mailgun`
each driver has it's own configuration variables, they can be defined either in the `.env` file or can be injected into the environemnt using an external tool. 


### Emails drivers config 
Here is an example for the emails config 
```bash
#######################################
######           Emails          ######
#######################################
EMAILS_DRIVER=smtp # smtp | sparkpost | sendgrid | mailgun
#_____ SMTP _____#
SMTP_HOST=localhost
SMTP_PORT=25
SMTP_USERNAME=
SMTP_PASSWORD=
SMTP_TLS_SKIP_VERIFY_HOST=true # (set true for development only!)

#_____ sparkpost _____#
SPARKPOST_BASE_URL=https://api.sparkpost.com
SPARKPOST_API_VERSION=1
SPARKPOST_API_KEY=sparkpost-api-key-here # the api key

#_____ sendgrid _____#
SENDGRID_HOST=https://api.sendgrid.com
SENDGRID_ENDPOINT=/v3/mail/send
SENDGRID_API_KEY=sendgrid-api-key-here # the api key

#_____ mailgun _____#
MAILGUN_DOMAIN=your-domain.com # your domain
MAILGUN_API_KEY=mailgun-api-key-here # the api key
MAILGUN_TLS_SKIP_VERIFY_HOST=true # (set true for development only!)
```

### Sending emails 
Here is an example for sending an email 
```go
package handlers

import (
	"fmt"

	"github.com/gocondor/core"
)

func SayHelloWorld(c *core.Context) *core.Response {
    mailer := c.GetMailer()
	// set from
	mailer.SetFrom(core.EmailAddress{Name: "jack", Address: "jack@example.com"})
	// set to
	mailer.SetTo([]core.EmailAddress{{Name: "jane", Address: "jane@example.com"}})
	// set cc
	mailer.SetCC([]core.EmailAddress{{Name: "john", Address: "john@example.com"}})
	// set bcc
	mailer.SetBCC([]core.EmailAddress{{Name: "bcc", Address: "bcc@example.com"}})
	// set the subject
	mailer.SetSubject(`Hello world`)
	// set the body
	mailer.SetHTMLBody(`<h1>Hello world from email</h1>`)
	// set attachment
	mailer.SetAttachments([]core.EmailAttachment{{
        Name: "my first file", 
        Path: "./storage/my-first-file.pdf"
    }})
	// send
	mailer.Send()
}
```
