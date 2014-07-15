package gui;
import javax.swing.JOptionPane;

public class Example_JOptionPane {

	public static void main(String[] args) {
		
		String msg1 = JOptionPane.showInputDialog("Enter a number");
		String msg2 = JOptionPane.showInputDialog("Enter another number");
		
		JOptionPane.showMessageDialog(null, "The sum of the numbers is: " + (Integer.parseInt(msg1) + Integer.parseInt(msg2)));
		
	}

}
