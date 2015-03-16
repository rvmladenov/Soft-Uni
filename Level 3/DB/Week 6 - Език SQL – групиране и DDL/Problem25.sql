-- Problem 25. Write a SQL query to display the average employee salary by department and job title.

use SoftUni;

SELECT d.Name as Department, e.JobTitle, AVG(e.Salary) as [Average Salary]
from Employees e
join Departments d on e.DepartmentID = d.DepartmentID
group by d.Name, e.JobTitle
order by e.JobTitle
