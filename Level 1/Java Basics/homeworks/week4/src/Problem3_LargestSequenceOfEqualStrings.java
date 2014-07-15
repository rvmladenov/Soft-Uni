import java.util.Scanner;

public class Problem3_LargestSequenceOfEqualStrings {

	public static void main(String[] args) {

		try (Scanner in = new Scanner(System.in)) {

			String input = in.nextLine();
			String[] splitedArr = input.split(" ");
			int counterTemp = 1;
			int counter = 1;
			int positionOfWord = 0;

			for (int i = 1; i < splitedArr.length; i++) {
				if (splitedArr[i].equals(splitedArr[i - 1])) {
					counterTemp++;
				} else {
					counterTemp = 1;
				}
				if (counterTemp > counter) { 
					counter = counterTemp;
					positionOfWord = i;
				}
			}

			for (int i = 0; i < counter; i++) {
				System.out.print(splitedArr[positionOfWord] + " ");
			}
		}
	}

}
