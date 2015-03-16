-- Problem 30.	Issue few SQL statements to insert, update and delete of some data in the table.

use SoftUni;

insert into WorkHours (EmployeeID, hours) values (1, 2)

update WorkHours set hours = 3 where id = (select top 1 id from WorkHours);

delete from WorkHours where id = (select top 1 id from WorkHours)