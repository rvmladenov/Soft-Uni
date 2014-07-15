import java.awt.geom.Rectangle2D;
import java.util.Scanner;

public class Problem3_PointsInsideAFigure_variant2 {

	public static void main(String[] args) {

		Rectangle2D.Double recTop = new Rectangle2D.Double(12.5, 6.0, 10.0, 2.5);
		
		Rectangle2D.Double recLeft = new Rectangle2D.Double(12.5, 8.5, 5, 5);
		
		Rectangle2D.Double recRight = new Rectangle2D.Double(20.5, 8.5, 5, 5);
		
		try(Scanner sc = new Scanner(System.in)) {
			System.out.print("Px = ");
			double Ax = sc.nextDouble();
			System.out.print("Py = ");
			double Ay = sc.nextDouble();

			System.out.println("MaxX " + recTop.getMaxX());
			System.out.println("MaxY " + recTop.getMaxY());
			System.out.println("MinX " + recTop.getMinX());
			System.out.println("MinY " + recTop.getMinY());
			String is = (recLeft.contains(Ax, Ay) == true) ? "OK" : "No";
			System.out.println("is true: " + is);
			
			if(recTop.contains(Ax, Ay)
					|| recLeft.contains(Ax, Ay)
					|| recRight.contains(Ax, Ay))
			{
				System.out.println("Inside");
			} else {
				System.out.println("Outside");
			}
		}
	}

}
