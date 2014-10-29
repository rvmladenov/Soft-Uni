package oneLvShop;

import java.math.BigDecimal;
import java.util.Date;
import java.util.concurrent.TimeUnit;

import oneLvShop.interfaces.Expirable;

public class FoodProduct extends Product implements Expirable {
	public Date expirationDate = new Date();
	
	public void setExpirationDate(Date expirationDate) {
		this.expirationDate = expirationDate;
		checkIfExpired();
	}

	private boolean hasExpired;
	private long daysUntilExpiry;

	public FoodProduct(String name, double price, int quantity, AgeRestriction ageRestrictionLevel) {
		super(name, price, quantity, ageRestrictionLevel);
	}

	@Override
	public BigDecimal getPrice() {
		if (this.daysUntilExpiry < 15) {
			return this.price.multiply(new BigDecimal(0.70));
		}
		return this.price;
	}

	@Override
	public String toString() {
		return super.toString() + "Expiration date: " + this.expirationDate.toString();
	}

	private void checkIfExpired() {
		Date now = new Date();
		long diff = this.expirationDate.getTime() - now.getTime();
		long days = TimeUnit.DAYS.convert(diff, TimeUnit.MILLISECONDS);
		
		if (days < 1) {
			this.hasExpired = true;
		} else {
			this.hasExpired = false;
		}
		
		this.daysUntilExpiry = days;
	}

	public Date getExpirationDate() {
		return this.expirationDate;
	}

	public boolean isExpired() {
		return this.hasExpired;
	}

	public void setHasExpired(boolean hasExpired) {
		this.hasExpired = hasExpired;
	}

	public long getDaysUntilExpiry() {
		return this.daysUntilExpiry;
	}

	public void setDaysUntilExpiry(long daysUntilExpiry) {
		this.daysUntilExpiry = daysUntilExpiry;
	}
}