import java.awt.Color;
import java.awt.Graphics;
import java.util.Random;

/**
 * The main Apple object(which the snake is eating) required for generating an apple in a random position on the canvas
 */
public class Apple {
	
	private static Random randomGenerator;
	private Point appleObject;
	private Color snakeColor;
	
	/**
	 * Creates the new Apple based on the snake's position
	 */
	public Apple(Snake snake) {
		appleObject = createApple(snake);
		snakeColor = Color.RED;		
	}
	
	private Point createApple(Snake snake) {
		randomGenerator = new Random();
		int x = randomGenerator.nextInt(30) * 20; 
		int y = randomGenerator.nextInt(30) * 20;
		for (Point snakePoint : snake.snakeBody) {
			if (x == snakePoint.getX() || y == snakePoint.getY()) {
				return createApple(snake);				
			}
		}
		return new Point(x, y);
	}
	
	/**
	 * Draws the Apple on the screen(canvas)
	 */
	public void drawApple(Graphics graphics){
		appleObject.draw(graphics, snakeColor);
	}	
	
	/**
	 * Gives you the current Apple's position
	 * @return The Apple Object on the canvas
	 */
	public Point getPoint(){
		return appleObject;
	}
}