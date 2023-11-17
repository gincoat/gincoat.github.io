---
title: Installation
---

To create a new GoCondor project you need to install `gaffer` first which is the `cli tool` for `GoCondor`

#### Install Gaffer cli
To install the `gaffer` globally open up your terminal and run the following command:
```bash
go install github.com/gocondor/gaffer@latest
```

#### Create a new project:
The command for creating a new project is the following:
```bash
gaffer new [project-name] [project-remote-repository]
```
Example
```bash
gaffer new myapp github.com/gocondor/myapp
```
where:
`project-name` is the name of your project
`remote-repository` is the remote repository that will host the project, usually `github.com` is used.
