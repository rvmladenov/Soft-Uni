package oneLvShop.customExceptions;

@SuppressWarnings("serial")
public class CustomerNoPermissionToBuyException extends ExceptionManagement {
	
	public CustomerNoPermissionToBuyException() {
		super("You are too young to buy this product!");
	}
	
}
