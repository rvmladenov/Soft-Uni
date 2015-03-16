-- Problem 6. Write a SQL query to find the number of employees in the "Sales" department.

use SoftUni;

SELECT count(*) as [Total Employees]
from Employees e
join Departments d on e.DepartmentID = d.DepartmentID
where d.Name = 'Sales'