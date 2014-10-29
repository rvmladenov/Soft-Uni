using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace p2_LaptopShop
{
    public class LaptopShop
    {

        static void Main()
        {
            // Some of the texts and informations are taken from the SoftUni forum.

            Laptop lenovoYoga2Pro = new Laptop(
                model: "Lenovo Yoga 2 Pro",
                manufacturer: "Lenovo",
                processor: "Intel Core i5-4210U (2-core, 1.70 - 2.70 GHz, 3MB cache)",
                graphicsCard: "Intel HD Graphics 4400",
                ram: 8,
                battery: "4 kletachna",
                batteryLife: 4,
                screen: "13.3 inch",
                price: 2259.0m
                );

            Console.WriteLine(lenovoYoga2Pro);
            Console.WriteLine();

            Laptop lenovo = new Laptop(
                model: "Lenovo Yoga 2 Pro",
                manufacturer: "Lenovo",
                processor: "Intel Core i5-4210U (2-core, 1.70 - 2.70 GHz, 3MB cache)",
                graphicsCard: "Intel HD Graphics 4400",
                ram: 8,
                batteryLife: 8,
                screen: "13.3 inch",
                price: 2259.0m
                );
            Console.WriteLine(lenovo);

            Laptop asus = new Laptop("Asus 1234511234", (decimal)5000);
            Console.WriteLine(asus);


        }
    }
}