import java.util.ArrayList;
import java.util.Scanner;

public class Problem9_CombineListsOfLetters {

	public static void main(String[] args) {

		try (Scanner sc = new Scanner(System.in)) {

			ArrayList<Character> l1 = new ArrayList<>();
			ArrayList<Character> l2 = new ArrayList<>();
			ArrayList<Character> combinedList = new ArrayList<>();

			for (char prop : sc.nextLine().toCharArray()) {
				l1.add(prop);
			}
			for (char prop : sc.nextLine().toCharArray()) {
				l2.add(prop);
			}

			combinedList.addAll(l1);
			for (int i = 0; i < l2.size(); i++) {
				if (l1.contains(l2.get(i))) {
					continue;
				} else {
					combinedList.add(' ');
					combinedList.add(l2.get(i));
				}
			}

			for (int i = 0; i < combinedList.size(); i++) {
				System.out.print(combinedList.get(i));
			}
		}

	}

}
