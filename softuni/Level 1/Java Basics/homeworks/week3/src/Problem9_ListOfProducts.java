import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.math.BigDecimal;
import java.util.HashMap;
import java.util.Map.Entry;
import java.util.TreeMap;

public class Problem9_ListOfProducts {

	public static void main(String[] args) throws FileNotFoundException,
			IOException {
		String fileNameIn = "Input.txt";
		String fileNameOut = "Output.txt";

		String filePathIn = System.getProperty("user.dir") + File.separator + fileNameIn;
		String filePathOut = System.getProperty("user.dir") + File.separator + fileNameOut;

		Product prod = new Product();

		try (BufferedReader br = new BufferedReader(new FileReader(filePathIn))) {

			
			/* Fill the results from the "Input.txt" file */
			String currentLine;
			while ((currentLine = br.readLine()) != null) {
				String[] splitted = currentLine.split(" ");
				prod.addPriceAndName(new BigDecimal(splitted[1]), splitted[0]);
			}
			
		}

		File outputFile = new File(filePathOut);
		try (BufferedWriter brOut = new BufferedWriter(new FileWriter(outputFile))) {
			
			
			TreeMap<BigDecimal, String> productsTreeMap = prod.getProducts();

			for (Entry<BigDecimal, String> entry : productsTreeMap.entrySet()) {

				String result = entry.getKey() + " " + entry.getValue() + "\n";
				brOut.write(result);
			}
			
		}

	}

}

/*
 * Class created to hold the Products information
 */
class Product {
	/* Holds the results taken from the "Input.txt" file */
	private HashMap<BigDecimal, String> productsMap = new HashMap<>();

	void addPriceAndName(BigDecimal price, String name) {
		productsMap.put(price, name);
	}

	public TreeMap<BigDecimal, String> getProducts() {
		/* Sorts the productsMap by its keys which are of type BigDecimal */
		TreeMap<BigDecimal, String> productsTreeMap = new TreeMap<>(productsMap);

		return productsTreeMap;
	}
}