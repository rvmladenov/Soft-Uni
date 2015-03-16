-- Problem 7.	Write a SQL to find the full name of each employee. 

use SoftUni;

select FirstName + ' ' + LastName as [Full Name]
from Employees