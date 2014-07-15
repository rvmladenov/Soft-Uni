import java.util.Scanner;

public class Problem8_CountOfEqualBitPairs {

	public static void main(String[] args) {
		try(Scanner sc = new Scanner(System.in)) {
			System.out.print("n = ");
			int n = sc.nextInt();

			String nBinStr = Integer.toBinaryString(n);

			int same = 0;
			int nBinStrLength = nBinStr.length();
			for (int i = 0; i < nBinStrLength-1; i++) {
				if(nBinStr.charAt(i) == nBinStr.charAt(i + 1)) {
					same++;
				}
			}
			
			System.out.print(same);
		}
	}

}
