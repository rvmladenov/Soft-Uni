import java.util.Scanner;
import org.joda.time.DateTime;
import org.joda.time.Days;


public class Problem7_DaysBetweenTwoDates {

	public static void main(String[] args) {
		try(Scanner sc = new Scanner(System.in)) {
			
			/* 
			 * This problem is resolved using "Joda Time" - Java date and time API - http://www.joda.org/joda-time/
			 */
			
			String dt1 = sc.nextLine();
			String dt2 = sc.nextLine();

			String[] dt1String = dt1.split("-");
			String[] dt2String = dt2.split("-");

			DateTime past = new DateTime(Integer.parseInt(dt1String[2]), Integer.parseInt(dt1String[1]), Integer.parseInt(dt1String[0]), 0, 0);
			DateTime today = new DateTime(Integer.parseInt(dt2String[2]), Integer.parseInt(dt2String[1]), Integer.parseInt(dt2String[0]), 0, 0);
			int days = Days.daysBetween(past,today).getDays();

			System.out.print(days);
			
		}
	}

}
