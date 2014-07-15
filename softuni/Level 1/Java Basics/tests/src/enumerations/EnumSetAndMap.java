package enumerations;

import java.util.EnumMap;

public class EnumSetAndMap {

	// FIXME: Not working example !
	public static void main(String[] args) {
		for (TestEnum prop : TestEnum.values()) {
			System.out.printf("%s\n", prop.name());
		}
		
	}

}
