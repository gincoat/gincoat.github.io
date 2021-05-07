---
title: Introduction
slug: /
---

GoCondor is a golang web framework with an `MVC` like architecture, it's based on [Gin framework](https://github.com/gin-gonic/gin), it features a simple organized directory structure for your next project with a pleasant development experience, made for developing modern APIs and microservices.

## Features 
- Router
- Middlewares
- JWT tokens
- ORM (GORM)
- Authentication
- Cache (Redis)
- TLS
- Live-Reloading for development
- Features Control

## Architecture
The architecture is similar to `MVC`, where there is a routes file `http/routes.go` in which you can map all your app routes to their handlers.
Handlers are simply methods that get executed when the matching request is received, you can think of it like a controller's action in `MVC`

#### The request journey:
`Request -> Routing -> Middleware -> Handler -> Middleware -> Json Response`

## Directory structure 
```bash
├── condor
│   ├── config/ ---------------> control what features to turn on
│   ├── httpd/-----------------> http related code
│   │   ├── handlers/ --------------> contains your requests handlers
│   │   ├── middlewares/ -----------> middlewares are defined here
│   ├── routes.go -------------> routes are mapped to their handlers here
│   ├── logs/ -----------------> logs file is here
│   ├── models/ ---------------> database models
│   ├── ssl/ ------------------> ssl certificates goes here
│   ├── .env ------------------> environment variables 
│   ├── .gitignore ------------> .gitignore file
│   ├── go.mod ----------------> Go modules that project depends on
│   ├── LICENSE ---------------> license
│   ├── main.go ---------------> main file
│   ├── README.md -------------> readme file
```
