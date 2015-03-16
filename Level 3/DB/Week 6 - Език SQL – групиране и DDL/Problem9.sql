-- Problem 9.	Write a SQL query to find all departments and the average salary for each of them.

use SoftUni;

SELECT d.Name as Department, AVG(e.Salary) as [Average Salary]
from Employees e
join Departments d on e.DepartmentID = d.DepartmentID
group by d.Name
order by d.Name
