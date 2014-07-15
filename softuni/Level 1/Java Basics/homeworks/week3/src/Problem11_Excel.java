/*
 * This solution is using the Apache POI API for Microsoft Documents.
 * Just download and add the required jars to the build path.
 * 
 * Това решение на задачата използва Apache POI API за Microsoft Documents.
 * Просто си го сваляте и добавяте нужните jar-ове, които са следните:
 * - poi-3.10-FINAL-20140208
 * - poi-ooxml-3.10-FINAL-20140208
 * - poi-ooxml-schemas-3.10-FINAL-20140208
 * - lib/* (всичко от папката lib)
 * 
 */

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.math.BigDecimal;
import java.util.HashMap;
import java.util.TreeMap;
import java.util.Map.Entry;

import org.apache.poi.xssf.usermodel.XSSFRow;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

public class Problem11_Excel {

    /**
     * @param args
     * @throws IOException 
     */
    public static void main(String[] args) throws IOException {
    	/* Open the excel file */
        FileInputStream fis = new FileInputStream(new File("Incomes-Report.xlsx"));
        int sheetToOpen = 0;
        
    	XlsxReader excel = new XlsxReader(fis, sheetToOpen);
    	TreeMap<String, BigDecimal> result = excel.getSortedResult();
    	
    	BigDecimal subtotal = new BigDecimal("0");
        for (Entry<String, BigDecimal> entry : result.entrySet()) {
        	System.out.printf("%1$s Total -> %2$.2f\n", entry.getKey(), entry.getValue());
        	subtotal = subtotal.add(entry.getValue());
		}
        System.out.printf("Grand Total -> %.2f", subtotal);
    }
}

class XlsxReader {
	
	private XSSFSheet ws;
	private int officeCellNum = 0;
	private int incomeCellNum = 3;
	private int vatCellNum = 4;
	
	public XlsxReader(FileInputStream fileToOpen, int sheetToOpen) throws IOException {
		
        /* Select which sheet to use */
        XSSFWorkbook wb = new XSSFWorkbook(fileToOpen);
        ws = wb.getSheetAt(sheetToOpen);
	}
	
	public TreeMap<String , BigDecimal> getSortedResult() {
		
		/* Return the max number of rows and cells and creates new HashMap that will hod the result  */
        int rowNum = ws.getLastRowNum() + 1;
        HashMap<String , BigDecimal> results = new HashMap<>();

        /* index "0" is the header row */
        for(int i = 1; i < rowNum; i++){
            XSSFRow row = ws.getRow(i);
            
            String office = row.getCell(officeCellNum).toString();
            BigDecimal incomePrice = new BigDecimal(row.getCell(incomeCellNum).toString());
            BigDecimal vatPrice = new BigDecimal(row.getCell(vatCellNum).getRawValue().toString());
            BigDecimal income = incomePrice.add(vatPrice);

            if(results.containsKey(office)) {
            	results.put(office, (results.get(office)).add(income));
            	continue;
            }
            
            results.put(office, income);
        }
        
        TreeMap<String, BigDecimal> sordetResult = new TreeMap<>(results);
        return sordetResult;
	}
}