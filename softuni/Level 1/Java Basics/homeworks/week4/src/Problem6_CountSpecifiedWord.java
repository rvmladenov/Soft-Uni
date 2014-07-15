import java.util.Scanner;


public class Problem6_CountSpecifiedWord {

	public static void main(String[] args) {
		
		try(Scanner sc = new Scanner(System.in)) {
			String inputString = sc.nextLine().toLowerCase();
			String searchedWord = sc.nextLine().toLowerCase();
			String[] splitedString = inputString.split("\\W+");
			
			int result = 0;
			for (int i = 0; i < splitedString.length; i++) {
				if(splitedString[i].equals(searchedWord)) {
					result++;
				}
			}
			
			System.out.println(result);
		}
		
	}

}
