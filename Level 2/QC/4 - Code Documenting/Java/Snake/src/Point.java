import java.awt.Color;
import java.awt.Graphics;

/**
 * Used for defining a single Point on the canvas
 */
public class Point {
	private int x, y;
	private final int WIDTH = 20;
	private final int HEIGHT = 20;
	
	/**
	 * Defines the coordinates of the new point on the canvas
	 * Based on another Point object
	 */
	public Point(Point point){
		this(point.x, point.y);
	}
	
	/**
	 * Defines the coordinates of the new point on the canvas
	 * Based on new coordinates
	 */
	public Point(int x, int y){
		this.x = x;
		this.y = y;
	}	
	
	/**
	 * Returns the X coordinate of the Point
	 * @return int
	 */
	public int getX() {
		return x;
	}
	
	/**
	 * Sets the X coordinate of the Point
	 * @return int
	 */
	public void setX(int x) {
		this.x = x;
	}
	
	/**
	 * Returns the Y coordinate of the Point
	 * @return int
	 */
	public int getY() {
		return y;
	}
	
	/**
	 * Sets the Y coordinate of the Point
	 * @return int
	 */
	public void setY(int y) {
		this.y = y;
	}
	
	/**
	 * Draws the new Point on the screen
	 * @see Color class
	 */
	public void draw(Graphics grapthics, Color color) {
		grapthics.setColor(Color.BLACK);
		grapthics.fillRect(x, y, WIDTH, HEIGHT);
		grapthics.setColor(color);
		grapthics.fillRect(x + 1, y + 1, WIDTH - 2, HEIGHT - 2);		
	}
	
	/**
	 * Returns the Coordinates of the Point on the screen
	 * @return String
	 */
	public String toString() {
		return "[x = " + x + ",y = " + y + "]";
	}
	
	/**
	 * @return "true" if the given Point is at the same position
	 */
	public boolean equals(Object object) {
        if (object instanceof Point) {
            Point point = (Point)object;
            return (x == point.x) && (y == point.y);
        }
        return false;
    }
}