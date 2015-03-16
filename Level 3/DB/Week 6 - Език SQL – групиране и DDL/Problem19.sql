-- Problem 19.	Write SQL statements to insert several records in the Users and Groups tables.

use SoftUni;

insert into Groups (name) values ('Some Name');
insert into Groups (name) values ('Some Name 2');

insert into users (username, password, fullName, lastLoginTime, GroupID) values ('name', '12345', 'name', getdate(), 1)
insert into users (username, password, fullName, lastLoginTime, GroupID) values ('name 2', '12345', 'name 2', getdate(), 2)