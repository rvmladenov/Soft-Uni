-- Problem 2.	Write a SQL query to find the names and salaries of the employees 
-- that have a salary that is up to 10% higher than the minimal salary for the company.

use SoftUni;

select FirstName, LastName, Salary from Employees
where Salary <= (select min(Salary) from Employees) * 1.10
order by Salary, FirstName, LastName