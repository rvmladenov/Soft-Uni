using System.Collections.Generic;
namespace InheritanceAndPolymorphism
{
    interface ICourse
    {
        string CourseName { get; set; }
        string TeacherName { get; set; }
        IList<string> Students { get; set; }
    }
}
