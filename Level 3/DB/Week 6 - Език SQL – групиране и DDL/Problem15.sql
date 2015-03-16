-- Problem 15.	Write a SQL statement to create a table Users.
use SoftUni;

create table users
(
	id int identity,
	username nvarchar(100) not null,
	password nvarchar(100) not null,
	fullName nvarchar(255) not null,
	lastLoginTime datetime not null,
	constraint PK_Users primary key(id),
	constraint UNQ_Users unique(username),
	constraint CHK_Password check (len(password) >= 5)
)