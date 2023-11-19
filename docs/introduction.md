---
title: Introduction
slug: /
---

GoCondor is a Golang web framework made for building web APIs, suitable for small to medium size projects and microservices. with its simple structure and developer-friendly experience, it makes developers happily more productive.

## Features 
- Routing
- Middlewares
- Data Validation
- Databases ORM ([GORM](https://gorm.io/) integrated)
- Events
- Emails
- JWT tokens
- Cache (Redis)
- HTTPS (TLS)

## Architecture
GoCondor's architecture is similar to `MVC`, it has a routes file `./routes.go` in which you can map all your app routes to their handlers, Handlers are located in the directory `./handlers`, and they are simply functions that gets called whenever a requests (GET, POST, ... etc) to the matching route is received.

#### The request journey:
`Request -> Router -> Optional Middleware -> Handler -> Optional Middleware ->  Response`

## Directory structure 
```bash
├── gocondor
│   ├── config/ --------------------------> main configs
│   ├── events/ --------------------------> contains events
│	│	├── jobs/ ------------------------> contains the event jobs
│   ├── handlers/ ------------------------> route's handlers
│   ├── logs/ ----------------------------> app log files
│   ├── middlewares/ ---------------------> app middlewares
│   ├── models/ --------------------------> database models
│   ├── storage/ -------------------------> a place to store files
│   ├── tls/ -----------------------------> tls certificates
│   ├── .env -----------------------------> environment variables 
│   ├── .gitignore -----------------------> .gitignore
│   ├── go.mod ---------------------------> Go modules
│   ├── LICENSE --------------------------> license
│   ├── main.go --------------------------> go main file
│   ├── README.md ------------------------> readme file
│   ├── register-events.go ---------------> register events and jobs
│   ├── register-global-middlewares.go ---> register global middlewares
│   ├── routes.go ------------------------> app routes
│   ├── run-auto-migrations.go -----------> database migrations
```