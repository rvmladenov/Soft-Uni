-- Problem 34.	Find how to use temporary tables in SQL Server.

use SoftUni;

DECLARE @tempEmplProjTable TABLE
(
        EmployeeID INT NOT NULL,
        ProjectID INT NOT NULL
)
INSERT INTO @tempEmplProjTable
        SELECT EmployeeID, ProjectID FROM EmployeesProjects
DROP TABLE EmployeesProjects
CREATE TABLE EmployeesProjects
(
        EmployeeID INT NOT NULL,
        ProjectID INT NOT NULL
)
INSERT INTO EmployeesProjects
        SELECT * FROM @tempEmplProjTable