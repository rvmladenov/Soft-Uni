-- Problem 13.	Write a SQL query to find the salary of all employees whose salary is in the range [20000…30000].

use SoftUni;

select *
from Employees
where Salary between 20000 and 30000
order by Salary