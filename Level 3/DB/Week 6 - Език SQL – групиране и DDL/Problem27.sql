-- Problem 27.	Write a SQL query to display the town where maximal number of employees work.

use SoftUni;

select top 1 t.Name, count(e.AddressID) as [Number of employees]
from Towns t
join Addresses a on a.TownID = t.TownID
join Employees e on e.AddressID = a.AddressID
group by t.Name
order by [Number of employees] desc