import java.util.Scanner;

public class Problem6_FormattingNumbers {

	public static void main(String[] args) {
		try(Scanner sc = new Scanner(System.in)) {
			System.out.print("a = ");
			int a = sc.nextInt();
			if(a < 0 || a > 500) {
				throw new IllegalArgumentException();
			}
			
			System.out.print("b = ");
			double b = sc.nextDouble();
			
			System.out.print("c = ");
			double c = sc.nextDouble();
			
			String aHex = Integer.toHexString(a).toUpperCase();
			String aBin = String.format("%10s", Integer.toBinaryString(a)).replace(' ', '0');

			System.out.printf("|%-10s|%s|%10.2f|%-10.3f|",aHex,aBin,b,c);
		}
	}

}
