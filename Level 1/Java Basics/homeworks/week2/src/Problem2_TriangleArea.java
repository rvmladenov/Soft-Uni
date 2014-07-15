import java.util.Scanner;

public class Problem2_TriangleArea {

	public static void main(String[] args) {
		try(Scanner sc = new Scanner(System.in)) {
			System.out.print("Ax = ");
			int Ax = sc.nextInt();
			System.out.print("Ay = ");
			int Ay = sc.nextInt();
			
			System.out.print("Bx = ");
			int Bx = sc.nextInt();
			System.out.print("By = ");
			int By = sc.nextInt();
			
			System.out.print("Cx = ");
			int Cx = sc.nextInt();
			System.out.print("Cy = ");
			int Cy = sc.nextInt();
			
			int area = Math.abs(((Ax*(By - Cy)) + (Bx*(Cy - Ay)) + (Cx*(Ay - By)))/2);
			
			System.out.printf("Area = %1$s", area);
		}
	}

}
