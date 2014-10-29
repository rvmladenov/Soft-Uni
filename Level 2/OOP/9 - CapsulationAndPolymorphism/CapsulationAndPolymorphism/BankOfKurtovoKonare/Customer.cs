using BankSystem.Interfaces;
using System;

namespace BankSystem
{

    public abstract class Customer : ICustomer
    {
        private string name;

        public Customer(string name)
        {
            this.Name = name;
        }

        public string Name
        {
            get
            {
                return this.name;
            }

            set
            {
                if (string.IsNullOrEmpty(value))
                {
                    throw new ArgumentNullException("Name");
                }

                this.name = value;
            }
        }
    }
}