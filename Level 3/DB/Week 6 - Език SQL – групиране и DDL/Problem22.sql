-- Problem 22.	Write SQL statements to insert in the Users table the names of all employees from the Employees table.

use SoftUni;

INSERT INTO Users
SELECT LEFT(FirstName, 1) + LOWER(LastName) + ISNULL(LEFT(MiddleName, 1), ''), LEFT(FirstName, 1) + LEFT(LOWER(LastName) + 'pass', 5),
FirstName + ' ' + LastName, GETDATE(), 1 FROM Employees