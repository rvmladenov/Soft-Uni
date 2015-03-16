-- Problem 32.	Start a database transaction, delete all employees from the 'Sales' department along with all dependent records from the pother tables. At the end rollback the transaction.ALTER TABLE Employees

use SoftUni;

ALTER TABLE Employees
DROP CONSTRAINT FK_Employees_Employees
GO
ALTER TABLE Employees
ADD CONSTRAINT FK_Employees_Employees FOREIGN KEY (ManagerID)
REFERENCES Employees(EmployeeID)
ON DELETE CASCADE
ON UPDATE NO ACTION
GO
 
BEGIN TRY
    BEGIN TRANSACTION
       
    COMMIT
END TRY
BEGIN CATCH
 
    IF @@TRANCOUNT > 0
        ROLLBACK
END CATCH

use SoftUni;

