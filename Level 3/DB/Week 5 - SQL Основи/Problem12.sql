-- Problem 12.	Write a SQL query to find the names of all employees whose last name contains "ei".

use SoftUni;

select *
from Employees
where LastName LIKE '%ei'
order by FirstName