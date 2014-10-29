using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CustomerProblem
{
    class Payment
    {
        public string ProductName { get; set; }

        public decimal Price { get; set; }

        public Payment(string productName, decimal price)
        {
            this.ProductName = productName;
            this.Price = price;
        }
    }
}
