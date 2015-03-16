-- Problem 18.	Write a SQL query to find all employees along with their address.

use SoftUni;

select top 5 *
from Employees e
inner join Addresses a on e.AddressID = a.AddressID
order by e.FirstName