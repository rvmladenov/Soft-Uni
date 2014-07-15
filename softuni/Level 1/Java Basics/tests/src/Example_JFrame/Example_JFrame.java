package Example_JFrame;

import javax.swing.JFrame;

public class Example_JFrame {

	public static void main(String[] args) {
		
		MainUI mui = new MainUI();
		mui.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		mui.setSize(400, 200);
		mui.setVisible(true);
		
	}

}
