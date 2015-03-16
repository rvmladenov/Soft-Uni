-- Problem 18. Write a SQL statement to add a column GroupID to the table Users.
use SoftUni;

alter table users
add GroupID int
foreign key references Groups(GroupID);

insert into Groups (name) values ('Some Name');
insert into Groups (name) values ('Some Name 2');

insert into users (username, password, fullName, lastLoginTime, GroupID) values ('name', '12345', 'name', getdate(), 1)
insert into users (username, password, fullName, lastLoginTime, GroupID) values ('name 2', '12345', 'name 2', getdate(), 2)