# theLawStoreTechTest

## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)

## General info
This project is simple Lorem ipsum dolor generator.
	
## Technologies
Project is created with:
* MySql
* .NET Core
* React

## Setup

### Database
```
CREATE USER:
	Login as root user
	Go to Administration
	Go to Users and Privilages
	Add Account:
		Login Name: thelawstore
		Password: password12!
	Go to Administrative Roles:
		Role: DBA
	Apply

CREATE NEW CONNECTION:
	Hostname: 127.0.0.1
	Port: 3306
	Username: thelawstore
	password: password12!

TEST CONNECTION:
	password: password12!
```

### Backend
New Terminal
```
$  cd JobSearcher/JobSearch
$ dotnet build 
$ dotnet run 
```

### Frontend
New Terminal
```
$ cd JobSearcherFrontend 
$ npm install
$ npm start
```
