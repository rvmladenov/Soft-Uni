using Shapes.Interfaces;
using System;

namespace Shapes
{
    class RunProblemShapes
    {
        public static void Main()
        {
            IShape[] shapes;

            IShape testTriangle1 = new Triangle(1.2, 2, 30);
            IShape testTriangle2 = new Triangle(3, 1.3, 60);

            IShape testRectangle1 = new Rectangle(2, 3);
            IShape testRectangle2 = new Rectangle(2, 3);

            IShape testCircle1 = new Circle(1.2);
            IShape testCircle2 = new Circle(3);

            shapes = new IShape[6] { testTriangle1, testTriangle2, testRectangle1, testRectangle2, testCircle1, testCircle2 };
            int shapesLength = shapes.Length;

            for (int i = 0; i < shapesLength; i++)
            {
                IShape shape = shapes[i];
                Console.WriteLine("Shape [{0}] has Area: ({1:0.00}) and Perimeter: ({2:0.00})", shape.GetType().Name, shape.CalculateArea(), shape.CalculatePerimeter());
            }
        }
    }
}
