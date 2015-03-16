-- Problem 10.	Write a SQL query to find all information about the employees whose job title is “Sales Representative“.

use SoftUni;

select *
from Employees
where JobTitle = 'Sales Representative'
order by FirstName