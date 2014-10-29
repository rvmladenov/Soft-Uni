using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _4_to_13
{
    public class StudentSpecialty
    {
        public string SpecialityName { get; set; }
        public int FacultyNumber { get; set; }

        public StudentSpecialty(string specialityName, int facultyNumber)
        {
            this.SpecialityName = specialityName;
            this.FacultyNumber = facultyNumber;
        }
    }
}
