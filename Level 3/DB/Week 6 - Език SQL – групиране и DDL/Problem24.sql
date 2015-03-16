-- Problem 24.	Write a SQL statement that deletes all users without passwords (NULL password).

use SoftUni;

delete from users
where password is null or password = ''