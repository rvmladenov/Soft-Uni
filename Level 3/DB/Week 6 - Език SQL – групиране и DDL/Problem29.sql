-- Problem 29.	Write a SQL to create table WorkHours to store work reports for each employee.

use SoftUni;

create table WorkHours (
	id int not null,
	EmployeeID int FOREIGN KEY REFERENCES Employees(EmployeeID) not null,
	date datetime,
	task text,
	hours int,
	comments nvarchar(255)
	constraint PK_WorkHours PRIMARY KEY(id)
)