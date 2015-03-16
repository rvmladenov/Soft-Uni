-- Problem 1.	Write a SQL query to find the names and salaries of the employees that take the minimal salary in the company.

use SoftUni;

select FirstName, LastName, Salary from Employees
where Salary = (select min(Salary) from Employees)
order by Salary, FirstName, LastName