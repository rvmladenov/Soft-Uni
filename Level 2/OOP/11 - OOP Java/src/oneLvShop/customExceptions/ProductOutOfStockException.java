package oneLvShop.customExceptions;

@SuppressWarnings("serial")
public class ProductOutOfStockException extends ExceptionManagement {
	
	public ProductOutOfStockException() {
		super("We`re sorry, this product is out of stock");
	}

}