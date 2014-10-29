using System;

class InitSolutions
{
    // Problem 1
    public static decimal GetSimpleInterest(decimal sum, decimal interest, int years)
    {
        return sum * (1 + (interest / 100) * years);
    }
    public static decimal GetCompoundInterest(decimal sum, decimal interest, int years)
    {
        return sum * (decimal)Math.Pow((double)(1 + (interest / 100) / 12), 12 * years);
    }

    // Problem 2 
    public static void Work1(string str)
    {
        Console.Write(str);
    }
    public static void Work2(string str)
    {
        Console.Write(str);
    }


    static void Main()
    {
        // Chast ot resheniqta na problemite tuk sa vzeti ot foruma

        /* Solution for Problem 1/Interest Calculator/ */
        var interest = new InterestCalculator(500m, 5.6m, 10, GetCompoundInterest);
        Console.WriteLine(interest);
        var compoundInterest = new InterestCalculator(2500m, 7.2m, 15, GetSimpleInterest);
        Console.WriteLine(compoundInterest);
        
        /* Solution for Problem 2/Async Timer/ */
        AsyncTimer timer1 = new AsyncTimer(Work1, 1000, 10);
        timer1.Start();
        AsyncTimer timer2 = new AsyncTimer(Work2, 500, 20);
        timer2.Start();

        /* Solution for Problem 3/Student Class/ */
        var student = new Student("Go6o", 17);
        student.Name = "Zara";
        student.Age = 69;
    }
}