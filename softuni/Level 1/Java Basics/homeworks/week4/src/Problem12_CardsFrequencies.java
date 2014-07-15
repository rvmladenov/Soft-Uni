import java.util.LinkedHashMap;
import java.util.Map.Entry;
import java.util.Scanner;


public class Problem12_CardsFrequencies {

	public static void main(String[] args) {
		
		try(Scanner sc = new Scanner(System.in)) {
			
			String input = sc.nextLine();
			String[] inputArr = input.split(" ");
			
			LinkedHashMap<String, Integer> result = new LinkedHashMap<>();
			
			int founded = 0;
			int inputArrLength = inputArr.length; 
			for (int i = 0; i < inputArrLength; i++) {
				String word = inputArr[i];
				word = word.substring(0, word.length() - 1);
				founded = 0;
				
				for (int j = i; j < inputArrLength; j++) {
					String wordToCheck = inputArr[j];
					wordToCheck = wordToCheck.substring(0, wordToCheck.length() - 1);
					
					if(word.equals(wordToCheck)) {
						founded++;
					}
				}
				
				if(!result.containsKey(word)) {
					result.put(word, founded);
				}
			}
			
			for (Entry<String, Integer> prop : result.entrySet()) {
				System.out.printf("%s -> %.2f%s  \n", prop.getKey(), 100*(Double.parseDouble(prop.getValue().toString())/inputArrLength), "%");
			}
			
		}

	}

}
