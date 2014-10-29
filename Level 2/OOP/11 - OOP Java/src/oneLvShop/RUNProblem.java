package oneLvShop;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

import oneLvShop.customExceptions.ExceptionManagement;

public class RUNProblem {

	public static void main(String[] args) throws ExceptionManagement {
		// Some ideas are taken from the forum

		FoodProduct cigars = new FoodProduct("420 Blaze it fgt", 6.90, 1400,
				AgeRestriction.Adult);

		// You are too young to buy this product!
		Customer pecata = new Customer("Pecata", 17, 30.00);
		PurchaseManager.processPurchase(pecata, cigars);

		// You don`t have enough money to buy this product
		Customer gopeto = new Customer("Gopeto", 18, 0.44);
		PurchaseManager.processPurchase(gopeto, cigars);

		// Uncomment this to show the rest of the requirements of the homework
//		List<Product> products = new ArrayList<Product>();
//		FoodProduct productTest1 = new FoodProduct("Toothpaste Aquafresh",
//				5.00, 10, AgeRestriction.None);
//		productTest1.setExpirationDate(new Date());
//		products.add(productTest1);
//		products.add(new FoodProduct("Vita bread", 1.10, 2,
//				AgeRestriction.Adult));
//		products.add(new FoodProduct("7Days", 0.79, 111,
//				AgeRestriction.Teenager));
//		products.add(new Computer("ExtraDelux XF 11", 699.90, 20,
//				AgeRestriction.None));
//		products.add(new Computer("TheBesto", 1699.90, 2, AgeRestriction.Adult));
//		products.add(new Appliance("Eldom Oven", 299.90, 60,
//				AgeRestriction.None));
//
//		List<Product> adultAgerestrictionByPrice = products.stream()
//				.filter(p -> p.ageRestrictionLevel == AgeRestriction.Adult)
//				.sorted( (p1, p2) -> p1.getPrice().compareTo(p2.getPrice()) )
//				.collect(Collectors.toList());
//
//		for (Product product : adultAgerestrictionByPrice) {
//			System.out.println(product + "\n");
//		}
	}

}
