import java.util.Scanner;


public class Problem4_TheSmallestOf3Numbers {

	public static void main(String[] args) {
		try(Scanner sc = new Scanner(System.in)) {
			System.out.print("Num 1 = ");
			double num1 = sc.nextDouble();
			
			System.out.print("Num 2 = ");
			double num2 = sc.nextDouble();
			
			System.out.print("Num 3 = ");
			double num3 = sc.nextDouble();
			
			System.out.printf("Smallest = %1$s", Math.min(num1, Math.min(num2, num3)));
		}
	}

}
