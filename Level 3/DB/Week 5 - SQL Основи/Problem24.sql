-- Problem 24.	Write a SQL query to find the names of all employees from the departments "Sales" and "Finance" whose hire year is between 1995 and 2005.

use SoftUni;

select e.FirstName, e.HireDate
from Employees e
join Departments d 
	on (d.DepartmentID = e.DepartmentID
		and d.Name in ('Sales', 'Finance')
		and e.HireDate between '1995' and '2005')
order by e.HireDate