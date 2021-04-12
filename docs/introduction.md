---
title: Introduction
slug: /
---

Condor is a golang web framework with an `MVC` like architecture, it's based on [Gin framework](https://github.com/gin-gonic/gin), it provides you with an easy-to-use directory structure for your next project, it has a development experience similar to Laravel, made for developing modern APIs and microservices.

## Features 
- Router
- Middlewares
- JWT tokens
- ORM (GORM)
- Cache (Redis)
- TLS
- Context Package Integrator
- Live-Reloading for development
- Features Control

## Architecture
The architecture is similar to `MVC` architecture, there is a `routes.go` file where you can define all your routes and their `handlers`, the handler is simply a method that gets executed when the request is received, you can think of it like a controller's action in `MVC`

#### The request journey:
`Request -> Routing -> Middleware -> Handler -> Middleware -> Json Response`

## Directory structure 
```bash
├── condor
│   ├── config/ ---------------> control what features to turn on
│   ├── httpd/-----------------> http related code
│   │   ├── handlers/ --------------> contains your http requests handlers
│   │   ├── middlewares/ -----------> middlewares are defined here
│   ├── routes.go -------------> your routes are defined here
│   ├── integrations/ ---------> contains the integrations of third party packages into gin context
│   ├── logs/ -----------------> log files
│   ├── models/ ---------------> database models
│   ├── ssl/ ------------------> ssl certificates
│   ├── .env ------------------> environment variables 
│   ├── .gitignore ------------> gitignore file
│   ├── go.mod ----------------> go modules the project depends on
│   ├── LICENSE ---------------> license
│   ├── main.go ---------------> main file
│   ├── README.md -------------> readme file
```
