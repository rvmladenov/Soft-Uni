-- Problem 12.	Write a SQL query to find all employees along with their managers.

use SoftUni;

SELECT e.FirstName+' '+e.LastName as [Employee Name], ISNULL(m.FirstName + ' ' + ISNULL(m.LastName, ''), 'No manager')
FROM Employees e
left outer JOIN Employees m ON m.ManagerID = e.EmployeeID