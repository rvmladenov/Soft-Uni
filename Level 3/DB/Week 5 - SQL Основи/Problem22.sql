-- Problem 22.	Write a SQL query to find all departments and all town names as a single list.

use SoftUni;

select Name from Departments
union
select Name from Towns