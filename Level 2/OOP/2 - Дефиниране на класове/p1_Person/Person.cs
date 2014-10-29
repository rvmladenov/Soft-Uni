using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace p1_Person
{
    public class Person
    {
        private string name;
        private int age;
        private string email;

        public Person(string name, int age, string email)
        {
            this.Name = name;
            this.Age = age;
            this.Email = email;
        }

        public Person(string name, int age) : this(name, age, null) { }

        string Name
        {
            get { return this.name; }
            set
            {
                if (string.IsNullOrEmpty(value)) throw new ArgumentNullException();
                this.name = value;
            }
        }
        int Age
        {
            get { return this.age; }
            set
            {
                if (value < 1 || value > 100) throw new ArgumentException("Invalid age. Must be in the range [0, 100]");
                this.age = value;
            }
        }
        string Email
        {
            get { return this.email; }
            set
            {
                if(value == null || (!String.IsNullOrEmpty(value) && value.Contains("@")))
                {
                    // email is optional and accepts "null" or some value having "@" inside of it
                    this.email = value;
                }
            }
        }

        public override string ToString()
        {
            return string.Format("Person: {0}, age: {1}, email: {2}", this.Name, this.Age, this.Email);
        }
    }
}
