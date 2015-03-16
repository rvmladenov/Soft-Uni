-- Problem 11.	Write a SQL query to find the names of all employees whose first name starts with "SA".

use SoftUni;

select *
from Employees
where FirstName LIKE 'SA%'
order by FirstName