import java.util.ArrayList;
import java.util.Random;
import java.util.Scanner;

public class Problem6_RandomHandsOf5Cards {

	public static void main(String[] args) {
		
		try(Scanner sc = new Scanner(System.in)) {
			
			int n = sc.nextInt();
			for (int i = 0; i < n; i++) {
				System.out.printf("%1$s\n", getRandCards());
			}
		}
	}
	
	public static String getRandCards() {
		String result = "";
		ArrayList<String> suitOfCards = getSuitOfCards();
		
		ArrayList<Integer> previousChoices = new ArrayList<>();
		for (int i = 0; i < 5; i++) {
			int randNum = randInt();
			/* Валидира, че преди това не е било избран същия номер */
			while (previousChoices.contains(randNum)) {
				randNum = randInt();
			}

			String card = suitOfCards.get(randNum);
			previousChoices.add(randNum);
			result += " " + card;
		}
		
		return result;
	}
	
	public static int randInt() {
		int min = 0;
		int max = 51;
	    Random rand = new Random();
	    
	    int randomNum = rand.nextInt((max - min) + 1) + min;
	    return randomNum;
	}
	
	public static ArrayList<String> getSuitOfCards() {
		
		ArrayList<String> resultArr = new ArrayList<>();
		
		char[] suits = {'\u2663', '\u2666', '\u2665', '\u2660'};
		String[] faces = {"2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"};
		
		for (int i = 0; i < faces.length; i++) {
			for (int j = 0; j < suits.length; j++) {
				resultArr.add( faces[i] + suits[j] );
			}
		}
		
		return resultArr;
	}

}
