-- Problem 19.	Write a SQL query to find all employees and their address.

use SoftUni;

select top 5 *
from Employees e, Addresses a
where e.AddressID = a.AddressID
order by e.FirstName