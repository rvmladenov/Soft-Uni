package oneLvShop.customExceptions;

@SuppressWarnings("serial")
public class ProductHasExpiredException extends ExceptionManagement {
	
	public ProductHasExpiredException() {
		super("This product has expired");
	}

}