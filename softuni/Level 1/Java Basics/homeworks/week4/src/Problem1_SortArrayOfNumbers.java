import java.util.Arrays;
import java.util.Scanner;


public class Problem1_SortArrayOfNumbers {

	public static void main(String[] args) {
		
		try(Scanner sc = new Scanner(System.in)) {
			int n = sc.nextInt();
			int[] intArr = new int[n]; 
			
			for (int i = 0; i < n; i++) {
				intArr[i] = sc.nextInt();
			}
			
			Arrays.sort(intArr);


			for (int i = 0; i < intArr.length; i++) {
				System.out.print(intArr[i] + " ");
			}
		}
		
	}

}
