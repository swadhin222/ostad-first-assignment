class BankAccount {
  constructor(accountNumber, ownerName, balance) {
    this.accountNumber = accountNumber;
    this.ownerName = ownerName;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
    console.log(`Deposited $${amount}. New balance: $${this.balance}`);
  }

  withdraw(amount) {
    if (amount > this.balance) {
      console.log("Insufficient funds");
    } else {
      this.balance -= amount;
      console.log(`Withdrawn $${amount}. New balance: $${this.balance}`);
    }
  }

  getBalance() {
    return this.balance;
  }

  displayAccountInfo() {
    console.log(`Account Number: ${this.accountNumber}`);
    console.log(`Owner Name: ${this.ownerName}`);
    console.log(`Balance: $${this.balance}`);
  }
}

const account1 = new BankAccount(5101, "Swadhin Das", 400);
const account2 = new BankAccount(5102, "RS Raj", 200);

account1.displayAccountInfo();
account1.deposit(100);
account1.withdraw(200);
account1.withdraw(800);


account2.displayAccountInfo();
account2.deposit(510);
account2.withdraw(205);
account2.withdraw(1500);
