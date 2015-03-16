-- Problem 3. Write a SQL query to find the full name, salary and department of the employees that take the minimal salary in their department.

use SoftUni;

SELECT FirstName + ' ' + ISNULL(MiddleName + ' ', '') + LastName AS [FULL Name],
       Salary, d.Name AS [Department Name]
FROM Employees e
  JOIN Departments d
    ON e.DepartmentID = d.DepartmentID
WHERE Salary = (SELECT MIN(Salary) FROM Employees WHERE DepartmentID = e.DepartmentID)
ORDER BY e.DepartmentID;