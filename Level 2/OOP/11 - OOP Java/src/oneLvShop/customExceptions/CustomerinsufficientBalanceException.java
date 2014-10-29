package oneLvShop.customExceptions;

@SuppressWarnings("serial")
public class CustomerinsufficientBalanceException extends ExceptionManagement {
	
	public CustomerinsufficientBalanceException() {
		super("You don`t have enough money to buy this product");
	}

}
