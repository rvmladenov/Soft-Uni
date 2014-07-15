import java.util.Scanner;

public class Problem9_PointsInsideTheHouse {

	public static void main(String[] args) {
		try(Scanner sc = new Scanner(System.in)) {
			double Px = sc.nextDouble();
			double Py = sc.nextDouble();
			
			if(isInTriangle(Px, Py) || isInRectangles(Px, Py))
			{
				System.out.println("Inside");
			} else {
				System.out.println("Outside");
			}
			
		}
	}

	public static boolean isInRectangles(double Px, double Py) {
		
		if ((Px >= 12.5 && Px <= 17.5) && (Py <= 13.5 && Py >= 8.5)
				|| (Px >= 20 && Px <= 22.5) && (Py <= 13.5 && Py >= 8.5)) {
            return true;
	    }
		
		return false;
	}
	
	public static boolean isInTriangle(double Px, double Py) {
		
		double x1 = 12.5, y1 = 8.5;
        double x2 = 17.5, y2 = 3.5;
        double x3 = 22.5, y3 = 8.5;

        double abc = Math.abs(x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2));
        double abp = Math.abs(x1 * (y2 - Py) + x2 * (Py - y1) + Px * (y1 - y2));
        double apc = Math.abs(x1 * (Py - y3) + Px * (y3 - y1) + x3 * (y1 - Py));
        double pbc = Math.abs(Px * (y2 - y3) + x2 * (y3 - Py) + x3 * (Py - y2));
		
        if (abp + apc + pbc == abc) {
            return true;
        }
        
		return false;
	}
}
