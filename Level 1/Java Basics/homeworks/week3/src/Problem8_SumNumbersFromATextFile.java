import java.io.BufferedReader;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;


public class Problem8_SumNumbersFromATextFile {

	public static void main(String[] args) throws FileNotFoundException, IOException {
		
		String fileName = "Input.txt";
		
		/* Returns the home directory of the project. i.e. the folder that contains the "src" directory */
		String filePath = System.getProperty("user.dir") + File.separator + fileName;
		
		try(BufferedReader br = new BufferedReader(new FileReader(filePath))) {
			
			String currentLine;
			int sum = 0;
			
			while ((currentLine = br.readLine()) != null) {
				sum += Integer.parseInt(currentLine);
			}
			
			System.out.println(sum);
			
		} catch (Exception e) {
			System.out.println("Error");
		} finally {
			/* From Java 7 there is a "try-with-resources Statement" and the "br.close()" is invoked automatically and we don't need to handle it */
		}
				
	}

}
