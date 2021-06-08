# theLawStoreTechTest

## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)
* [Usage](#Usage)
* [Mock Data](#Data)

## General info
This project is a fullstack job finding web application, for the law store developer test.
	
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
### Usage


### Data
```
INSERT INTO `jobsearch` VALUES (1,'Backend','55000','Web Developer','Builds and maintains the technology needed to power the components which enable the user-facing side of the website to exist.','06-06-2021'),(2,'Frontend','45000','Web Developer','Responsible for implementing visual and interactive elements that users engage with','07-06-2021'),(3,'Fullstack','65000','Web Developer','Works with both the front and back ends of a website or application.','08-06-2021'),(4,'Backend','55000','Software Engineer','Builds and maintains the technology needed to power the components which enable the user-facing side of the website to exist.','06-06-2021'),(6,'Fullstack','65000','Software Engineer','Works with both the front and back ends of a website or application.','02-06-2021'),(7,'Backend','55000','IT Assistant','Builds and maintains the technology needed to power the components which enable the user-facing side of the website to exist.','06-06-2021'),(8,'Frontend','45000','IT Assistant','Responsible for implementing visual and interactive elements that users engage with','06-06-2021'),(9,'Fullstack','65000','IT Assistant','Works with both the front and back ends of a website or application.','06-06-2021'),(10,'Backend','55000','Tech Lead','Builds and maintains the technology needed to power the components which enable the user-facing side of the website to exist.','06-06-2021'),(11,'Fullstack','65000','Tech Lead','Works with both the front and back ends of a website or application.','06-07-2021');
```
