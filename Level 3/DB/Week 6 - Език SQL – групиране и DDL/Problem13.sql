-- Problem 13. Write a SQL query to find the names of all employees whose last name is exactly 5 characters long. 

use SoftUni;

SELECT FirstName+' '+LastName as [Employee Name]
FROM Employees
where len(LastName) = 5
order by FirstName