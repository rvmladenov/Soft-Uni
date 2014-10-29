using System;

class TestProblems
{
    static void Main()
    {
        // 1 - Point3D

        Point3D p1 = new Point3D(2, 3, 4);
        Point3D p2 = new Point3D(6.4, 3.4, 1.2);

        Console.WriteLine(Point3D.StartPoint);
        Console.WriteLine(p1);
        Console.WriteLine(p2);

        // 2 - Distance Calculator
        double distance = DistanceCalcolator.CalculateDistance(p1, p2);
        Console.WriteLine(distance);

        // 3 - Paths
        Path path = new Path(p1, p2, Point3D.StartPoint);
        Console.WriteLine("Saving: {0}", path);
        Storage.SavePathInFile("path.txt", path);
        Path loadPath = Storage.LoadPathOfFile("path.txt");
        Console.WriteLine("Loading: {0}", loadPath);
    }
}

