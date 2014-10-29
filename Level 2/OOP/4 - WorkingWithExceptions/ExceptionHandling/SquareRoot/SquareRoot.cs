using System;

class SquareRoot
{
    static void Main()
    {
        try
        {
            Console.Write("Some number: ");
            int number = int.Parse(Console.ReadLine());
            if (number < 0)
            {
                throw new ArgumentOutOfRangeException();
            }
            double numberSqrt = Math.Sqrt(number);
            Console.WriteLine("Square Root for number {0} is {1}", number, numberSqrt);
        }
        catch (FormatException)
        {
            Console.WriteLine("No or invalid number");
        }
        catch (ArgumentOutOfRangeException)
        {
            Console.WriteLine("Number should be [0, +Infinite]");
        }
        finally
        {
            Console.WriteLine("end");
        }
    }
}
