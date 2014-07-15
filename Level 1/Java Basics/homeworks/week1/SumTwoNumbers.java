import java.util.Scanner;

public class SumTwoNumbers {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		
		System.out.print("a = ");
		int num1 = sc.nextInt();
		
		System.out.print("b = ");
		int num2 = sc.nextInt();
		
		sc.close();
		System.out.println("Sum = " + (num1 + num2));
	}

}
