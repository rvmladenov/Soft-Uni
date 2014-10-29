import java.awt.Canvas;
import java.awt.Dimension;
import java.awt.Graphics;

/**
 * The main Player class holding all the required data related to the Player interaction on the board
 */
public class Player extends Canvas implements Runnable {
	private static final long serialVersionUID = 1L;
	public static Snake snake;
	public static Apple apple;
	static int score;
	
	private Graphics globalGraphics;
	private Thread runThread;
	public static final int WIDTH = 600;
	public static final int HEIGHT = 600;
	private final Dimension dimension = new Dimension(WIDTH, HEIGHT);
	
	static boolean isGameRunning = false;
	
	/**
	 * Will paint the game on the canvas
	 */
	public void paint(Graphics graphics){
		this.setPreferredSize(dimension);
		globalGraphics = graphics.create();
		score = 0;
		
		if(runThread == null){
			runThread = new Thread(this);
			runThread.start();
			isGameRunning = true;
		}
	}
	
	/**
	 * Runs the game
	 * @throws In case of a problem(currently left blank)
	 * @
	 */
	public void run(){
		while(isGameRunning){
			snake.tick();
			render(globalGraphics);
			try {
				Thread.sleep(100);
			} catch (Exception e) {
				// to do
			}
		}
	}
	
	/**
	 * Will initialize the player setting(Snake and Apple positions)
	 */
	public Player(){	
		snake = new Snake();
		apple = new Apple(snake);
	}
	
	/**
	 * Renders the new UI on every Player interaction
	 */
	public void render(Graphics grapthics){
		grapthics.clearRect(0, 0, WIDTH, HEIGHT+25);
		
		grapthics.drawRect(0, 0, WIDTH, HEIGHT);			
		snake.drawSnake(grapthics);
		apple.drawApple(grapthics);
		grapthics.drawString("score= " + score, 10, HEIGHT + 25);		
	}
}