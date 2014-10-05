namespace InheritanceAndAbstraction.School
{
    using System;
    using System.Collections.Generic;

    abstract class School
    {
        private IList<SchoolClass> classes { get; set; }

        public School(IList<SchoolClass> classes)
        {
            this.classes = classes;
        }
    }
}