using System;
using System.Collections.Generic;

namespace CustomerProblem
{
    class RunProblem
    {
        public static void Main()
        {
            Customer rado = new Customer("Rado", "Radov", "Radov", 9043367759, "Radovo", "0888696969", "rado@rado.rado", CustomerType.Golden, new List<Payment>());
            Customer radoCloned = (Customer) rado.Clone();
            Console.WriteLine(rado.Equals(radoCloned)); // Should be true
 
            radoCloned.Id = 4356345563;
            radoCloned.Payments.Add(new Payment("ProductName", 43543643));
            Console.WriteLine(rado.Equals(radoCloned)); // Should be false

            Console.WriteLine(rado.CompareTo(radoCloned) > 0); // The name is the same but the ID of rado > of ID radoCloned
        }
    }
}
