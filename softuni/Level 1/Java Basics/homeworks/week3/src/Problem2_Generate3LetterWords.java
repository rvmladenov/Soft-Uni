import java.util.Scanner;

public class Problem2_Generate3LetterWords {

	public static void main(String[] args) {
		
		try(Scanner sc = new Scanner(System.in)) {
			char[] input = sc.nextLine().toCharArray();
			
			int inputLength = input.length;
			for (int ch1 = 0; ch1 < inputLength; ch1++) {
				for (int ch2 = 0; ch2 < inputLength; ch2++) {
					for (int ch3 = 0; ch3 < inputLength; ch3++) {
						System.out.printf("%1$s%2$s%3$s ", input[ch1], input[ch2], input[ch3]);
					}
				}
			}
			
		}
		
	}

}
