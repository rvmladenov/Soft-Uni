using System;
using System.Threading;
using  System.Globalization;

public class Point3D
{
    private double x;
    private double y;
    private double z;
    private static readonly Point3D start3DPointCoords;

    public double X { get { return this.x; } }
    public double Y { get { return this.y; } }
    public double Z { get { return this.z; } }
    static Point3D()
    {
        Point3D.start3DPointCoords = new Point3D(0, 0, 0);
    }

    public Point3D(double x, double y, double z)
    {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    public static Point3D StartPoint
    {
        get { return start3DPointCoords; }
    }

    public override string ToString()
    {
        string result = "";
        result += String.Format("{0}, {1}, {2}", this.X, this.Y, this.Z);

        return result;
    }
}

