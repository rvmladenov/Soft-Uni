-- Problem 17. Write a SQL statement to create a table Groups. 
use SoftUni;

create table Groups (
	id int identity,
	name nvarchar(255) not null,
	constraint pk_groups primary key(id),
	constraint unq_groups unique(name)
)