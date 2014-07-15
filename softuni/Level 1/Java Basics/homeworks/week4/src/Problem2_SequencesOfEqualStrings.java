import java.util.Scanner;

public class Problem2_SequencesOfEqualStrings {

	public static void main(String[] args) {
		try(Scanner sc = new Scanner(System.in)) { 
			
			String input = sc.nextLine();
			String[] splited = input.split(" ");
			
			for (int i = 0; i < splited.length - 1; i++) {
				// Оставаме последния елемент, който е "splited.length - 1" да се обработва последно
				
				String whatToPrint = splited[i] + " ";
				if(!splited[i].equals(splited[i + 1])) {
					whatToPrint += "\n";
				}
				System.out.printf("%s", whatToPrint);
			}
			
			System.out.printf("%s", splited[splited.length - 1]);
		}
	}

}
