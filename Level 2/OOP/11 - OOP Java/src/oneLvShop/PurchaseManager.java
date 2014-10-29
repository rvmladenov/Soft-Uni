package oneLvShop;

import oneLvShop.customExceptions.CustomerNoPermissionToBuyException;
import oneLvShop.customExceptions.CustomerinsufficientBalanceException;
import oneLvShop.customExceptions.ExceptionManagement;
import oneLvShop.customExceptions.ProductHasExpiredException;
import oneLvShop.customExceptions.ProductOutOfStockException;

public final class PurchaseManager {

	private PurchaseManager() {
	}

	public static void processPurchase(Customer customer, Product product)
			throws ExceptionManagement {

		try {
			if (product instanceof FoodProduct) {
				if (((FoodProduct) product).isExpired()) {
					throw new ProductHasExpiredException();
				}
			}

			if (product.getQuantity() < 1) {
				throw new ProductOutOfStockException();
			}

			if (customer.getBalance().compareTo(product.getPrice()) == -1) {
				throw new CustomerinsufficientBalanceException();
			}

			if (product.ageRestrictionLevel == AgeRestriction.Adult
					&& customer.getAge() < 18) {
				throw new CustomerNoPermissionToBuyException();
			}

			customer.setBalance(customer.getBalance().subtract(
					product.getPrice()));
			product.setQuantity(product.getQuantity() - 1);
		
		} catch (Exception e) {
			// Intentionally did it this way so the Input and the Output could be as the examples from the homework
			System.out.println(e.getMessage());
		}
	}
}