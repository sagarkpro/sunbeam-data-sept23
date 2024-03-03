package dependent;


import dependency.Transport;

public class ATMImpl implements ATM {
	private Transport myTransport;//=new HttpTransport();//depcy
	public ATMImpl(Transport t1234) {
		this.myTransport=t1234;//ctor based D.I
		System.out.println("in cnstr of " +getClass().getName()+" "+myTransport);//not null
	}

	@Override
	public void deposit(double amt) {
		System.out.println("depositing "+amt);
		byte[] data=("depositing "+amt).getBytes();
		myTransport.informBank(data);//depnt obj using depcy 

	}

	@Override
	public void withdraw(double amt) {
		System.out.println("withdrawing "+amt);
		byte[] data=("withdrawing "+amt).getBytes();
		myTransport.informBank(data);
	}
	
	//init method
	public void myInit() {
		System.out.println("in init "+myTransport);
	}
	//destroy method
	public void myDestroy() {
		System.out.println("in destroy "+myTransport);
	}
	
	
	
}
