-- Problem 9.	Write a SQL query to find all different employee salaries. 

use SoftUni;

select distinct Salary
from Employees
order by Salary