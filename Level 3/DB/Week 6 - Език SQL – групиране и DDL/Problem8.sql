-- Problem 8.	Write a SQL query to find the number of all employees that have no manager.

use SoftUni;

SELECT count(*) as [Total Employees That Does Not Have Manager]
from Employees
where ManagerID is null