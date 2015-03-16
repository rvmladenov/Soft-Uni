-- Problem 7.Write a SQL query to find the number of all employees that have manager.

use SoftUni;

SELECT count(*) as [Total Employees That Have Manager]
from Employees
where ManagerID is not null