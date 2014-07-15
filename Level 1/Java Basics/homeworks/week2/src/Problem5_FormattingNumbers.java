import java.util.Scanner;

public class Problem5_FormattingNumbers {

	public static void main(String[] args) {
		try(Scanner sc = new Scanner(System.in)) {
			System.out.print("num = ");
			int num = sc.nextInt();
			
			System.out.printf("Hexadecimal Representation = %1$s", Integer.toHexString(num).toUpperCase());
		}
	}

}
