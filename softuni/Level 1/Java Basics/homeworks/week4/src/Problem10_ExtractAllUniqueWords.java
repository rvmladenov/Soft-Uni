import java.util.Scanner;
import java.util.Set;
import java.util.TreeSet;

public class Problem10_ExtractAllUniqueWords {

	public static void main(String[] args) {

		try (Scanner sc = new Scanner(System.in)) {

			String input = sc.nextLine().toLowerCase();
			String[] splittedInput = input.split("\\W");

			Set<String> setWords = new TreeSet<>();
			for (String prop : splittedInput) {
				setWords.add(prop);
			}

			for (String prop : setWords) {
				System.out.print(prop + " ");
			}
		}
	}

}
