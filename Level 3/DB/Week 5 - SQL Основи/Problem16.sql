-- Problem 16.	Write a SQL query to find all employees that have salary more than 50000. Order them in decreasing order by salary.

use SoftUni;

select *
from Employees
where Salary > 50000
order by Salary desc