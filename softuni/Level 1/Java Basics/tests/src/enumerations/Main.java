package enumerations;

public class Main {

	/* Tova moje da se definira i tuk */
	enum Foo { ONE, TWO, THREE}
	
	public static void main(String[] args) {
		
		for (TestEnum prop : TestEnum.values()) {
			System.out.printf("Family: %s\nAge: %s\n---\n", prop.getFamilyName(), prop.getAge());
		}
		
		System.out.println("--------------------------");
		
		for (Foo prop : Foo.values()) {
			System.out.printf("%s\n", prop.name());
		}
		
	}

}
