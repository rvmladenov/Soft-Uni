-- Problem 23.	Write a SQL statement that changes the password to NULL for all users that have not been in the system since 10.03.2010.

use SoftUni;

update users set password = null 
where lastLoginTime <= cast('2013-10-03' as datetime)
