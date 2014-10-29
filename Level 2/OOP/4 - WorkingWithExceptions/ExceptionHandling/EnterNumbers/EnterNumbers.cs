using System;

namespace ExceptionHandling.EnterNumbers
{
    class EnterNumbers
    {
        static void Main()
        {
            SquareRoot sq = new SquareRoot();

            int startNum = 1;
            int endNum = 100;

            for (int i = 0; i < 10; i++)
            {
                startNum = ReadNumber(startNum, endNum);
            }
        }

        static int ReadNumber(int startNumber, int endNumber)
        {
            int number = 0;

            try
            {
                Console.Write("Enter a number between {0} and {1}: ", startNumber, endNumber);
                number = int.Parse(Console.ReadLine());
                if (!(startNumber < number && number < endNumber))
                {
                    while (!(startNumber < number && number < endNumber))
                    {
                        Console.WriteLine("Valid range is [{0}, {1}]", startNumber, endNumber);
                        Console.Write("Enter a number between {0} and {1}: ", startNumber, endNumber);
                        number = int.Parse(Console.ReadLine());
                    }
                }
            }
            catch (FormatException)
            {
                Console.WriteLine("Invalid Number");
                throw;
            }

            return number;
        }
    }
}
