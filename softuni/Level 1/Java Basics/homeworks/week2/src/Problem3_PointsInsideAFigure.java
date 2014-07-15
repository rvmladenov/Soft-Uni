import java.util.Scanner;

public class Problem3_PointsInsideAFigure {

	public static void main(String[] args) {
		try(Scanner sc = new Scanner(System.in)) {
			System.out.print("Px = ");
			double Px = sc.nextDouble();
			System.out.print("Py = ");
			double Py = sc.nextDouble();

	        if ((Px >= 12.5 && Px <= 22.5 && Py >= 6 && Py <= 8.5)
                    ||(Px >= 12.5 && Px <= 17.5 && Py >= 8.5 && Py <= 13.5)
                    ||(Px >= 20 && Px <= 22.5 && Py >= 8.5 && Py <= 13.5)){
                    System.out.println("Inside");
            }else {
                    System.out.println("Outside");
            }
		}
	}
}
