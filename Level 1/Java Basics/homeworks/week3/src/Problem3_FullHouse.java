public class Problem3_FullHouse {

	public static void main(String[] args) {

		char spato = '\u2663';
		char karo = '\u2666';
		char kupa = '\u2665';
		char pika = '\u2660';

		String[] faces = { "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A" };
		char[] suits = { spato, karo, kupa, pika };

		int count = 0;

		int facesLength = faces.length;
		int suitsLength = suits.length;
		for (int faces1 = 0; faces1 < facesLength; faces1++) {
			for (int faces2 = 0; faces2 < facesLength; faces2++) {
				for (int suits1 = 0; suits1 < suitsLength; suits1++) {
					for (int suits2 = suits1 + 1; suits2 < suitsLength; suits2++) {
						for (int suits3 = suits2 + 1; suits3 < suitsLength; suits3++) {
							for (int suits4 = 0; suits4 < suitsLength; suits4++) {
								for (int suits5 = suits4 + 1; suits5 < suitsLength; suits5++) {
									if (faces1 != faces2) {
										System.out.printf(
												"%s%c %s%c %s%c %s%c %s%c\n",
												faces[faces1], suits[suits1], faces[faces1],
												suits[suits2], faces[faces1], suits[suits3],
												faces[faces2], suits[suits4], faces[faces2],
												suits[suits5]);
										count++;
									}

								}

							}

						}
					}
				}
			}
		}
		System.out.print(count + " full houses");
	}

}
