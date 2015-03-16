-- Problem 20.	Write SQL statements to update some of the records in the Users and Groups tables.

use SoftUni;

-- just a sample
update Groups set name = 'new name' where id = 1

-- just a sample
update users set username = 'new username' where GroupID = 1
