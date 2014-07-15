package enumerations;

public enum TestEnum {
	ivan("ivanov", 23),
	go6o("go6ov", 34),
	rado("radov", 27);
	
	private String family;
	private int age;
	
	TestEnum(String familyName, int year) {
		family = familyName;
		age = year;
	}
	
	String getFamilyName() {
		return family;
	}
	
	int getAge() {
		return age;
	}
}
