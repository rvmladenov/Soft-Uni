import java.util.Scanner;


public class Problem1_RectangleArea {

	public static void main(String[] args) {
		try(Scanner sc = new Scanner(System.in)) {
			System.out.print("a = ");
			int a = Integer.parseInt(sc.nextLine());
			
			System.out.print("b = ");
			int b = Integer.parseInt(sc.nextLine());
			
			System.out.printf("area = %1$s", (a*b));
		}
	}

}
