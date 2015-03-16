-- Problem 33.	Start a database transaction and drop the table EmployeesProjects.

use SoftUni;

BEGIN TRAN
DROP TABLE EmployeesProjects
ROLLBACK