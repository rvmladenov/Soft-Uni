using System;
using OthertypesInOOP.GalacticGPS;
using OthertypesInOOP.GenericLit;
using OthertypesInOOP.FractionCalculator;

namespace OthertypesInOOP
{
    class InitProblems
    {
        public static void Main()
        {
            /* Solution for Problem 1/Galactic GPS/ */
            Location home = new Location(18.037986, 28.870097, Planet.Earth);
            Console.WriteLine(home);

            Console.WriteLine("----------------------");
            /* Solution for Problem 2/Fraction Calculator/ */
            Fraction fraction1 = new Fraction(22, 7);
            Console.WriteLine(fraction1);
            Fraction fraction2 = new Fraction(40, 4);
            Console.WriteLine(fraction2);
            Fraction result = fraction1 + fraction2;
            Console.WriteLine(result.Numerator);
            Console.WriteLine(result.Denominator);
            Console.WriteLine(result);
            Console.WriteLine(fraction2 - fraction1);

            Console.WriteLine("----------------------");
            /* Solution for Problem 3/Generic List/ 
             * This sample data is taken from the forum
             */
            GenericList<string> gl = new GenericList<string>(10);
            GenericList<int> gl2 = new GenericList<int>(2);
            gl2.Add(1);
            gl2.Add(2);
            gl2.Add(10);
            gl2.Add(99);
            gl2.Add(22);
            gl2.Add(40);
            gl2.Add(121);
            gl2.Add(23);
            Console.WriteLine(gl2);
            Console.WriteLine(gl2[3]);
            Console.WriteLine(gl2.IndexOf(121));
            gl2.RemoveAt(3);
            Console.WriteLine(gl2);
            Console.WriteLine(gl2[3]);
            Console.WriteLine(gl2.IndexOf(121));
            gl2.InsertAt(4, 66);
            Console.WriteLine(gl2);
            Console.WriteLine(gl2.ListSize);
            Console.WriteLine("Max: " + gl2.Max());
            Console.WriteLine("Min: " + gl2.Min());

            Console.WriteLine("----------------------");
            /* Solution for Problem 4/Generic List Version/ */
            Type type = typeof(GenericList<>);
            object[] versionAttributes = type.GetCustomAttributes(typeof(VersionAttribute), true);
            foreach (VersionAttribute attribute in versionAttributes)
            {
                Console.WriteLine("Version: " + attribute.Major + "." + attribute.Minor);
            }
        }
    }
}
