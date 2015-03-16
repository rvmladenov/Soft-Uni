-- Problem 28.	Write a SQL query to display the number of managers from each town.

use SoftUni;

select t.Name, count(distinct m.FirstName) as [Number of managers]
from Employees m
join Addresses a on a.AddressID = m.AddressID
join Towns t on t.TownID = a.TownID
where m.ManagerID is null
group by t.Name