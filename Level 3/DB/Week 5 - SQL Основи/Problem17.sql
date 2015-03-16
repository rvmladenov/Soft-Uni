-- Problem 17.	Write a SQL query to find the top 5 best paid employees.

use SoftUni;

select top 5 *
from Employees
where Salary > 50000
order by Salary desc