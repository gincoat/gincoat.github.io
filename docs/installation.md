---
title: Installation
---

To create a new GoCondor project you need to install the `gocondor cli` first

#### Install GoCondor cli
To install the `gocondor cli` globally open up your terminal and run the following command:
```bash
go install github.com/gocondor/installer/gocondor@latest
```

#### Create a new project:
The command for creating a new project is the following:
```bash
gocondor new [project-name] [remote-repository]
```
Example
```bash
gocondor new my-project github.com/gocondor/my-project
```
where:
`project-name` is the name of your project
`remote-repository` is the remote repository that will host the project, usually `github.com` is used.
