-- Problem 21.	Write a SQL query to find all employees, along with their manager and their address.

use SoftUni;

select *
from Employees e
join Employees m on e.ManagerID = m.EmployeeID
join Addresses a on e.AddressID = a.AddressID
order by m.FirstName