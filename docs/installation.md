---
title: Installation
---

To create a new Condor project you need to install the `Condor cli` first

#### Install Condor cli
To install the `Condor cli` open up your terminal and run the following command:
```bash
go get github.com/gocondor/installer/condor
```

#### Create a new project:
The command for creating a new project is the following:
```bash
gocondor new [project-name] [project-location]
```
where:
`project-name` is the name of your project
`project-location` is the remote repository to host the project, usually people use `github.com`

Now let's create a project with the name `todo` and let's assume it's hosted on github.com in an organization with the name `my-organization`, here is the command to create that
```bash
gocondor new todo github.com/my-organization/todo
```
