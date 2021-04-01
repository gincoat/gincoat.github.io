---
title: Introduction
slug: /
---

Gincoat is a golang web framework with an `MVC` like architecture, it's based on [Gin framework](https://github.com/gin-gonic/gin), it has a development experience similar to Laravel, made for developing modern APIs and microservices.

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

## Install
To create a new Gincoat project you need to install the `Gincoat cli` first

#### Install Via `Gincoat cli`
To install the `Gincoat cli` open up your terminal and run the following command:
```bash
go get github.com/gincoat/installer/gincoat
```

#### Create a new project:
The command for creating a new project is the following:
```bash
gincoat new [project-name] [project-repository]
```
where:
`project-name` is the name of your project
`project-location` is the remote repository to host the project, usually people use `github.com`

Now let's create a project with the name `todo` and let's assume it's hosted on github.com in an organization with the name `my-organization`, here is the command to create that
```bash
gincoat new todo github.com/my-organization/todo
```

## Directory structure 
```bash
├── gincoat
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
│   ├── main.go ---------------> ssl certificates
│   ├── README.md -------------> readme file
```
