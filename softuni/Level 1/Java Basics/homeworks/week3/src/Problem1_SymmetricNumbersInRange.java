import java.util.Scanner;

public class Problem1_SymmetricNumbersInRange {

	public static void main(String[] args) {
		try(Scanner sc = new Scanner(System.in)) {

			int startNum = sc.nextInt();
			int endNum = sc.nextInt();

			
			for (int i = (int)startNum; i <= (int)endNum; i++) {
				if(isSymmetric(i)) {
					System.out.printf("%s ", i);
				}
			}
		}
	}
	
	public static boolean isSymmetric(int num) {
		
		 /* A symmetrical number is one that reads the same from either direction, e.g. 121, */
		boolean isSym = true;
		
		/* Convert the primitive type int to String */
		String numString = "" + num;
		
		/* Find the middle */
		int numLength = numString.length() / 2;
		
		for (int i = 0, j = numString.length()-1; i <= numLength; i++, j--) {
			if(numString.charAt(i) == numString.charAt(j)) {
				continue;
			}
			
			/* The 2 numbers defining if a number is symmetrical are not equal. Quitting the loop */
			isSym = false;
			break;
		}
		
		return isSym;
	}

}
