-- Problem 8.	Write a SQL query to find the email addresses of each employee.

use SoftUni;

select FirstName + '.' + LastName + '@softuni.bg' as [Full Email Address]
from Employees