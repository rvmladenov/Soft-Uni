package geometry;

public class Circle extends PlaneShape {
	
	private double radius;

	public Circle(double x, double y, double radius) {
		super(x, y);
		this.setRadius(radius);
	}

	@Override
	public double getArea() {
		return this.radius * this.radius * Math.PI;
	}

	@Override
	public double getPerimeter() {
		return 2.0 * Math.PI * this.radius;
	}

	public double getRadius() {
		return this.radius;
	}

	public void setRadius(double radius) {
		if (radius < 0) {
			throw new IllegalArgumentException("radius must be >= 0");
		}
		
		this.radius = radius;
	}
}