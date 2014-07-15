import java.util.HashSet;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Scanner;
import java.util.TreeMap;


public class Problem11_MostFrequentWord {

	public static void main(String[] args) {
		
		try (Scanner sc = new Scanner(System.in)) {

			String input = sc.nextLine().toLowerCase();
			String[] splittedInput = input.split("\\W");
			
			Map<String, Integer> mostUsed = new TreeMap<>();
			HashSet<String> iteratedWords = new HashSet<>();
			
			int foundedTimes;
			int splittedInputLength = splittedInput.length;
			for (int i = 0; i < splittedInputLength; i++) {
				foundedTimes = 0;
				String wordToCheck = splittedInput[i];
				if(iteratedWords.contains(wordToCheck) || wordToCheck.equals("")) {
					continue;
				}

				iteratedWords.add(wordToCheck);

				for (int j = 0; j < splittedInputLength; j++) {
					if(wordToCheck.equals(splittedInput[j])) {
						foundedTimes++;
					}
				}
				
				if(mostUsed.size() > 0) {
					for (Entry<String, Integer> prop : mostUsed.entrySet()) {
						if(prop.getValue() < foundedTimes) {
							mostUsed.clear();
							mostUsed.put(wordToCheck, foundedTimes);
						} else if(prop.getValue() == foundedTimes) {
							mostUsed.put(wordToCheck, foundedTimes);
						}
						break;
					}
				} else {
					mostUsed.put(wordToCheck, foundedTimes);
				}
			}
			
			for (Entry<String, Integer> prop : mostUsed.entrySet()) {
				System.out.printf("%1$s -> %2$s\n", prop.getKey(), prop.getValue());
			}
			
		}
		
	}

}
