-- Problem 5. Write a SQL query to find the average salary in the "Sales" department.

use SoftUni;

SELECT AVG(Salary) as [Average Salary]
from Employees e
join Departments d on e.DepartmentID = d.DepartmentID
where d.Name = 'Sales'