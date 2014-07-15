import java.util.Scanner;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class Problem8_ExtractEmails {

	public static void main(String[] args) {
		try (Scanner sc = new Scanner(System.in)) {

			String input = sc.nextLine();
			Pattern emailPattern = Pattern.compile("[\\w]+(?:\\.[\\w-+]+)*@(?:[\\w-]+\\.)+[a-zA-Z]{2,7}");
			Matcher matcher = emailPattern.matcher(input);

			while (matcher.find()) {
				System.out.println(matcher.group());
			}

		}

	}

}
