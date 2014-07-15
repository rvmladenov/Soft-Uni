import java.util.Scanner;


public class Problem5_CountAllWords {

	public static void main(String[] args) {
		
		try(Scanner sc = new Scanner(System.in)) {
			String input = sc.nextLine();
			String[] splited = input.split("\\W+");
			System.out.println(splited.length);
		}
		
	}

}
