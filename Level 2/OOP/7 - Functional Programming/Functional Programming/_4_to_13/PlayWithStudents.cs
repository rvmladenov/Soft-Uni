using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _4_to_13
{
    class PlayWithStudents
    {
        static void Main(string[] args)
        {
            // 03_Class Student
            Student Viktor =
                new Student("Vik", "tik", 25, 10110000, "02/943-48-06",
                    "vik@tip.pic", new List<int>() { 2, 5, 5, 6, 6, 6, 6 }, 2, "Excellent");
            Student Angel =
                new Student("An", "Zablqn", 14, 14124568, "+359789654123",
                    "an@4orban.bgn", new List<int>() { 5, 2, 4, 6, 4, 2, 3 }, 1, "Medium");

            List<Student> students = new List<Student>();
            students.Add(Viktor);
            students.Add(Angel);

            // 04_Student-by-Group
            var studentsFrom2Group =
                from student in students
                where student.GroupNumber == 2
                orderby student.FirstName
                select student;

            Console.WriteLine("Student by Group: \n");
            foreach (var item in studentsFrom2Group)
            {
                Console.WriteLine(item);
            }

            // 05_Students-by-First-and-Last-Name
            var studentsByNameAndLastName =
                from student in students
                orderby student.FirstName, student.Lastname
                select student;

            Console.WriteLine("Students by First and Last Name: \n");
            foreach (var item in studentsByNameAndLastName)
            {
                Console.WriteLine(item);
            }

            // 06_Students-by-Age
            var studentsByAge =
                from student in students
                where student.Age <= 24 && student.Age >= 18
                select new { FirstName = student.FirstName, LastName = student.Lastname };

            Console.WriteLine("Student by Age: \n ");
            foreach (var item in studentsByAge)
            {
                Console.WriteLine("Student: ({0} {1})", item.FirstName, item.LastName);
            }

            // 07_Sort-Students
            Console.WriteLine("\nSort Students with LAMBDA:  \n");
            students.OrderByDescending(s => s.FirstName).ThenByDescending(s => s.Lastname).ToList().ForEach(s => Console.WriteLine(s.ToString()));

            var studentsInDescendingOrder =
                from student in students
                orderby student.FirstName descending, student.Lastname descending
                select student;

            Console.WriteLine("Sort Students with LINQ: \n");
            foreach (var item in studentsInDescendingOrder)
            {
                Console.WriteLine(item);
            }

            // 08_Filter Students by Email Domain
            Console.WriteLine("Students by Email Domain: \n");

            var studentsByEmail =
                from student in students
                where student.Email.Contains("@tip.pic")
                select student;

            foreach (var item in studentsByEmail)
            {
                Console.WriteLine(item);
            }

            // Filter Students by Phone
            Console.WriteLine("Students by Phone: \n");

            var studentsByPhone =
                from student in students
                where student.Phone.StartsWith("02") || student.Phone.StartsWith("+3592") || student.Phone.StartsWith("+359 2")
                select student;

            foreach (var item in studentsByPhone)
            {
                Console.WriteLine(item);
            }

            // 10_Excellent Students
            Console.WriteLine("Excellent Students: \n");

            var studentExcellent =
                from student in students
                where student.Marks.Contains(6)
                select new { FirstName = student.FirstName, Marks = student.Marks };

            foreach (var item in studentExcellent)
            {
                string marks = string.Join(", ", item.Marks);
                Console.WriteLine("{0}: ({1})", item.FirstName, marks);
            }

            // 11_Weak Students
            Console.WriteLine("Weak Stuents: \n");

            var weakStudents =
                from student in students
                where student.Marks.Where(s => s == 2).Count() == 2
                select student;
            foreach (var item in weakStudents)
            {
                Console.WriteLine(item);
            }

            // 12_Students Endrolled in 2014
            Console.WriteLine("Students Endrolled in 2014: \n");

            students.Where(s => s.FacultyNumber.ToString().Trim().StartsWith("14"))
                .ToList().ForEach(s => Console.WriteLine(s.ToString()));

            // 13_Students by Groups
            Console.WriteLine("Students by Groups: \n");

            var groups =
                from student in students
                group student by student.GroupName into g
                orderby g.Key
                select g;

            int studentByGroupCounter = 0;
            foreach (var item in groups)
            {

                var tempStudents = students.Where(s => s.GroupName == item.Key);

                Console.WriteLine("{0}: \n", item.Key);
                foreach (var student in tempStudents)
                {
                    studentByGroupCounter++;
                    Console.WriteLine(studentByGroupCounter + ". \n" + student);
                }
                studentByGroupCounter = 0;
            }
        }
    }
}
