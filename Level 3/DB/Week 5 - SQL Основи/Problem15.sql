-- Problem 15.	Write a SQL query to find all employees that do not have manager.

use SoftUni;

select *
from Employees
where ManagerID is null