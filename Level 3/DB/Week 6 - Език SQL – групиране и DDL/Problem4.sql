-- Problem 4. Write a SQL query to find the average salary in the department #1.

use SoftUni;

SELECT AVG(Salary) as [Average Salary]
from Employees
where DepartmentID = 1