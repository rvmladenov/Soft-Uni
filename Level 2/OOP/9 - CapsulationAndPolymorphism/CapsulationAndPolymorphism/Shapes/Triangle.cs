using System;

namespace Shapes
{
    class Triangle : BasicShape
    {
        private double includedAngle;
        private double p1;
        private int p2;
        private int p3;

        public double IncludedAngle
        {
            get
            {
                return this.includedAngle;
            }

            set
            {
                if (value < 0 || value > 360)
                {
                    throw new ArgumentOutOfRangeException("Must be in the range [0, 360]");
                }

                this.includedAngle = value;
            }
        }

        public Triangle(double width, double height, double includedAngle)
            : base(width, height)
        {
            this.IncludedAngle = includedAngle;
        }

        public override double CalculateArea()
        {
            return (Math.Sin(this.IncludedAngle * Math.PI / 180) * this.Width * this.Height) / 2;
        }

        public override double CalculatePerimeter()
        {
            // law of cosines
            return this.Width + this.Height + Math.Sqrt((this.Width * this.Width) + (this.Height * this.Height) - (2 * this.Height * this.Width * Math.Cos(this.IncludedAngle * Math.PI / 180)));
        }
    }
}
