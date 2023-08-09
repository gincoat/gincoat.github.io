---
title: Introduction
slug: /
---

GoCondor is a Golang web framework made for building web APIs, suitable for small to medium size projects and microservices. with its simple structure and developer-friendly experience, it makes developers happily more productive.

## Features 
- Routing
- HTTPS (TLS)
- Let's Encrypt Auto Renewal
- Middlewares
- Databases ORM (GORM integrated)
- JWT tokens
- Validation
- Emails
- Cache (Redis)

## Architecture
GoCondor's architecture is similar to `MVC`, it has a routes file `./routes.go` in which you can map all your app routes to their handlers, Handlers are located in the directory `./handlers`, and they are simply functions that gets called whenever a requests (GET, POST, ... etc) to the matching route is received.

#### The request journey:
`Request -> Router -> Optional Middleware -> Handler -> Optional Middleware ->  Response`

## Directory structure 
```bash
├── gocondor
│   ├── config/ --------------------------> main configs
│   ├── handlers/ ------------------------> request handlers
│   ├── logs/ ----------------------------> log files
│   ├── middlewares/ ---------------------> routes middlewares
│   ├── models/ --------------------------> database models
│   ├── tls/ -----------------------------> tls certificates
│   ├── storage/ -------------------------> a place to store files
│   ├── .env -----------------------------> variables to be injected to the environment
│   ├── .gitignore -----------------------> .gitignore
│   ├── go.mod ---------------------------> project dependencies
│   ├── LICENSE --------------------------> license
│   ├── main.go --------------------------> main go file
│   ├── README.md ------------------------> readme file
│   ├── register-global-middlewares.go ---> register middlewares globally
│   ├── routes.go ------------------------> app routes
│   ├── run-auto-migrations.go -----------> database migrations
```