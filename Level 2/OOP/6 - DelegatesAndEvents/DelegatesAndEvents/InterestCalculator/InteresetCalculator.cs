using System;

    
public delegate decimal CalculateInterest(decimal sum, decimal interest, int years);

class InterestCalculator
{
    private decimal money;
    private decimal interes;
    private int years;
    private CalculateInterest type;

    public InterestCalculator(decimal money, decimal interes, int years, CalculateInterest type)
    {
        this.years = years;
        this.type = type;
        this.interes = interes;
        this.money = money;
    }

    public override string ToString()
    {
        return string.Format("{0:F4}", this.type(this.money, this.interes, this.years));
    }
}