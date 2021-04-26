---
title: Installation
---

To create a new GoCondor project you need to install the `gocondor cli` first

#### Install GoCondor cli
To install the `gocondor cli` open up your terminal and run the following command:
```bash
go get github.com/gocondor/installer/gocondor
```

#### Create a new project:
The command for creating a new project is the following:
```bash
gocondor new [project-name] [project-location]
```
where:
`project-name` is the name of your project
`project-location` is the remote repository that will host the project, usually people use `github.com`

Now let's create a project with the name `todo` and let's assume it's hosted on the repository `github.com/my-organization/todo`, here is the command to create that project
```bash
gocondor new todo github.com/my-organization/todo
```
