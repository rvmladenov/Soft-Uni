using System;
using System.Numerics;

class BitArray
{
    private byte[] bitArr;

    public BitArray(int n)
    {
        if (n < 1 || n > 100000)
        {
            throw new IndexOutOfRangeException("Valid range is [1, 100000]");
        }

        this.bitArr = new byte[n];
    }

    public byte this[int index] 
    {
        get
        {
            return this.bitArr[index];
        }
        set
        {
            if (index < 0 || index > this.bitArr.Length - 1)
            {
                throw new IndexOutOfRangeException("The value must be in range [0.." + (this.bitArr.Length-1) + "]");
            }
            if (value != 0 && value != 1)
            {
                throw new IndexOutOfRangeException("The value must be 1 or 0");
            }
            this.bitArr[index] = value; 
        }
    }

    public override string ToString()
    {
        BigInteger number = 0;

        for (int i = 0; i < this.bitArr.Length; i++)
        {
            if (this.bitArr[i] == 1)
            {
                number += BigInteger.Pow(2, i);
            } 
        }
      
        return number.ToString();
    }
}

