namespace InheritanceAndPolymorphism
{
    using System;
    using System.Collections.Generic;

    public abstract class Course : ICourse
    {
        private string courseName;

        public string CourseName { 
            get
            {
                return this.courseName;
            }
            set
            {
                if(string.IsNullOrEmpty(value))
                {
                    throw new ArgumentNullException("Course Name is the only required parameter");
                }

                this.courseName = value;
            }
        }

        public string TeacherName { get; set; }

        public System.Collections.Generic.IList<string> Students { get; set; }

        protected string GetStudentsAsString()
        {
            if (this.Students == null || this.Students.Count == 0)
            {
                return "{ }";
            }
            else
            {
                return "{ " + string.Join(", ", this.Students) + " }";
            }
        }

        public Course(string courseName)
        {
            this.CourseName = courseName;
            this.TeacherName = null;
            this.Students = new List<string>();
        }

        public Course(string courseName, string teacherName)
        {
            this.CourseName = courseName;
            this.TeacherName = teacherName;
            this.Students = new List<string>();
        }

        public Course(string courseName, string teacherName, IList<string> students)
        {
            this.CourseName = courseName;
            this.TeacherName = teacherName;
            this.Students = students;
        }
    }
}
