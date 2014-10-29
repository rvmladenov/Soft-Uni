using System;

public static class DistanceCalcolator
{
    public static double CalculateDistance(Point3D p1, Point3D p2)
    {
        double X = p1.X - p2.X;
        double Y = p1.Y - p2.Y;
        double Z = p1.Z - p2.Z;

        double distance = Math.Sqrt(X * X + Y * Y + Z * Z);
        return distance;
    }
}