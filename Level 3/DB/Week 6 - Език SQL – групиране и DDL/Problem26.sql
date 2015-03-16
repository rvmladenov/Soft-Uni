-- Problem 26.	Write a SQL query to display the minimal employee salary by department and job title along with the name of some of the employees that take it.

use SoftUni;

SELECT d.Name as Department, e.JobTitle, e.FirstName, e.Salary as [Min Salary]
from Employees e
join Departments d on e.DepartmentID = d.DepartmentID
group by d.Name, e.JobTitle, e.FirstName, e.Salary, e.DepartmentID
having e.Salary = (
	select min(Salary)
	from Employees
	where JobTitle = e.JobTitle and DepartmentID = e.DepartmentID
)
order by Department