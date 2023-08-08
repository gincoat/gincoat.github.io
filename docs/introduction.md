---
title: Introduction
slug: /
---

GoCondor is a Golang web framework made for building web APIs, suitable for small & medium size projects and microservices. with its simple structure and developer-friendly experience, it makes developers happily more productive.

## Features 
- Routing
- Middlewares
- Validation
- Databases ORM (GORM integrated)
- Emails
- JWT tokens
- Cache (Redis)
- HTTPS (TLS)

## Architecture
GoCondor's architecture is similar to `MVC`, it has a routes file `./routes.go` in which you can map all your app routes to their handlers which are located in the directory `./handlers`. Handlers are simply methods that handle requests (GET, POST, ... etc) to the given routes.

#### The request journey:
`Request -> Router -> Optional Middleware -> Handler -> Optional Middleware ->  Response`

## Directory structure 
```bash
├── gocondor
│   ├── config/ --------------------------> main configs
│   ├── handlers/ ------------------------> route's handlers
│   ├── logs/ ----------------------------> app log files
│   ├── middlewares/ ---------------------> app middlewares
│   ├── models/ --------------------------> database models
│   ├── tls/ -----------------------------> tls certificates
│   ├── storage/ -------------------------> a place to store files
│   ├── .env -----------------------------> environment variables 
│   ├── .gitignore -----------------------> .gitignore
│   ├── go.mod ---------------------------> Go modules
│   ├── LICENSE --------------------------> license
│   ├── main.go --------------------------> go main file
│   ├── README.md ------------------------> readme file
│   ├── register-global-middlewares.go ---> register global middlewares
│   ├── routes.go ------------------------> app routes
│   ├── run-auto-migrations.go -----------> database migrations
```
