-- Problem 10.	Write a SQL query to find the count of all employees in each department and for each town.

use SoftUni;

select t.Name as Town, d.Name as Department, count(e.FirstName) as [Employees Count]
from Employees e
join Departments d on e.DepartmentID = d.DepartmentID
join Addresses a on a.AddressID = e.AddressID
join Towns t on a.TownID = t.TownID
group by t.Name, d.Name
order by t.Name, [Employees Count] desc