import java.util.Scanner;

public class Problem4_LongestIncreasingSequence {

	public static void main(String[] args) {
		try (Scanner in = new Scanner(System.in)) {

			String input = in.nextLine();
			String[] arr = input.split(" ");
			
			int counterTemp = 1;
			int counter = 1;
			int positionOfInt = 0;

			System.out.print(arr[0]);
			for (int i = 1; i < arr.length; i++) {
				int curNum = Integer.parseInt(arr[i]);
				
				if (curNum > Integer.parseInt(arr[i - 1])) {
					counterTemp++;
					System.out.print(" " + curNum);
				} else {
					counterTemp = 1;
					System.out.println();
					System.out.print(curNum);
				}

				if (counterTemp > counter) {
					counter = counterTemp;
					positionOfInt = i;
				}
			}

			System.out.print("\nLongest: ");
			for (int j = 0; j < counter; j++) {
				System.out.print(arr[positionOfInt - counter + 1 + j] + " ");
			}
		}
	}

}
