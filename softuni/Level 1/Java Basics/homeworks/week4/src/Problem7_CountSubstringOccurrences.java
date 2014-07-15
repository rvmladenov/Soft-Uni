import java.util.Scanner;


public class Problem7_CountSubstringOccurrences {

	public static void main(String[] args) {
		
		try(Scanner sc = new Scanner(System.in)) {
			String inputString = sc.nextLine().toLowerCase();
			String searchedWord = sc.nextLine().toLowerCase();
			int searchedWordLength = searchedWord.length();

			int result = 0;
			for (int i = 0; i < inputString.length() - (searchedWordLength - 1); i++) {
				if(inputString.substring(i, i + searchedWordLength).equals(searchedWord)) {
					result++;
				}
			}
			
			System.out.println(result);
		
		}
		
	}

}
