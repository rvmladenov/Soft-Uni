-- Problem 23.	Write a SQL query to find all the employees and the manager for each of them along with the employees that do not have manager. 

use SoftUni;

select *
from Employees e
right outer join Employees m on e.ManagerID = m.EmployeeID
order by m.FirstName

select *
from Employees e
left outer join Employees m on e.ManagerID = m.EmployeeID
order by m.FirstName