-- Problem 20.	Write a SQL query to find all employees along with their manager.

use SoftUni;

select *
FROM Employees e
JOIN Employees m ON e.ManagerID = m.EmployeeID
order by m.FirstName