package Example_JFrame;

import java.awt.FlowLayout;
import javax.swing.JFrame;
import javax.swing.JLabel;

public class MainUI extends JFrame {

	public MainUI() {
		
		super("Някакъв тъп title");
		setLayout(new FlowLayout());
		
		JLabel label1 = new JLabel("Some stupid text for the JLabel");
		label1.setToolTipText("Some stupid tooltip text");
		add(label1);
		
		
	}

}
