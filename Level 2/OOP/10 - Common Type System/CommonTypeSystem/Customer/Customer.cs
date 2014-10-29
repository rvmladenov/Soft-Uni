using System;
using System.Collections;
using System.Collections.Generic;

namespace CustomerProblem
{
    class Customer : ICloneable, IComparable<Customer>
    {
        public string FirstName { get; set; }

        public string MiddleName { get; set; }

        public string LastName { get; set; }

        public long Id { get; set; }

        public string PermanentAddress { get; set; }

        public string MobilePhone { get; set; }

        public string Email { get; set; }

        public CustomerType CustomerType { get; set; }

        public List<Payment> Payments { get; set; }

        private Customer() { }

        public Customer(string firstName, string middleName, string lastName, long id, string permanentAddress, string mobilePhone, string email, CustomerType customerType, List<Payment> payments)
        {
            this.FirstName = firstName;
            this.MiddleName = middleName;
            this.LastName = lastName;
            this.Id = id;
            this.PermanentAddress = permanentAddress;
            this.MobilePhone = mobilePhone;
            this.Email = email;
            this.CustomerType = customerType;
            this.Payments = payments;
        }

        public override bool Equals(object obj)
        {
            Customer customer = obj as Customer;
            if (customer == null)
            {
                return false;
            }

            if (!Equals(this.FirstName, customer.FirstName))
            {
                return false;
            }

            if (!Equals(this.MiddleName, customer.MiddleName))
            {
                return false;
            }

            if (!Equals(this.LastName, customer.LastName))
            {
                return false;
            }

            if (this.Id != customer.Id)
            {
                return false;
            }

            if (!Equals(this.PermanentAddress, customer.PermanentAddress))
            {
                return false;
            }

            if (!Equals(this.MobilePhone, customer.MobilePhone))
            {
                return false;
            }

            if (!Equals(this.Email, customer.Email))
            {
                return false;
            }

            if (!Equals(this.CustomerType, customer.CustomerType))
            {
                return false;
            }

            if (this.Payments.Count != customer.Payments.Count)
            {
                return false;
            }

            for (int i = 0; i < this.Payments.Count; i++)
            {
                if (!Equals(this.Payments[i], customer.Payments[i]))
                {
                    return false;
                }
            }

            return true;
        }

        public override string ToString()
        {
            return base.ToString();
        }

        public override int GetHashCode()
        {
            return this.FirstName.GetHashCode() ^
                this.MiddleName.GetHashCode() ^
                this.LastName.GetHashCode() ^
                this.Id.GetHashCode() ^
                this.PermanentAddress.GetHashCode() ^
                this.MobilePhone.GetHashCode() ^
                this.Email.GetHashCode() ^
                this.Payments.GetHashCode() ^
                this.CustomerType.GetHashCode();
        }

        public static bool operator ==(Customer customer1, Customer customer2)
        {
            return Customer.Equals(customer1, customer2);
        }

        public static bool operator !=(Customer customer1, Customer customer2)
        {
            return !(Customer.Equals(customer1, customer2));
        }

        public object Clone()
        {
            List<Payment> currentPayments = new List<Payment>();
            for (int i = 0; i < this.Payments.Count; i++)
            {
                currentPayments[i] = this.Payments[i];
            }

            return new Customer(this.FirstName, this.MiddleName, this.LastName, this.Id, this.PermanentAddress, this.MobilePhone, this.Email, this.CustomerType, this.Payments);
        }

        public int CompareTo(Customer otherCustomer)
        {

            int comparedResult = this.FirstName.CompareTo(otherCustomer.FirstName);
            return comparedResult == 0 ? this.Id.CompareTo(otherCustomer.Id) : comparedResult;
        }
    }
}
