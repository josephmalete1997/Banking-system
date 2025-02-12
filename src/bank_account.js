const {
  accountTypes,
  errorObject,
  newAccounts,
} = require("../helpers/helper_objects");
const { accountExists } = require("../helpers/helper_functions");

class BankAccount {
  constructor(
    clientName,
    dateOfBirth,
    accountNumber,
    accountType,
    accountBalance
  ) {
    this.clientName = clientName;
    this.dateOfBirth = dateOfBirth;
    this.accountNumber = accountNumber;
    this.accountType = accountType;
    this.accountBalance = accountBalance;

    if (!accountTypes.includes(this.accountType.toLowerCase())) {
      throw new Error("Invalid account type!");
    }

    accountExists(this);
  }

  viewBalance() {
    return this.accountBalance;
  }

  deposit(amount) {
    if (typeof amount !== "number") throw new Error("Invalid amount type!");
    this.accountBalance += amount;
    return `Deposit to the amount of R${amount} was successfully made! New account balance is R${this.accountBalance}.`;
  }

  withdraw(amount) {
    if (amount > this.accountBalance)
      throw new Error(errorObject.insufficientBalance("Withdrawal"));
    this.accountBalance -= amount;
    return `Withdrawal of R${amount} was successfully made! New account balance is R${this.accountBalance}.`;
  }

  transfer(amount, toAccount) {
    if (amount > this.accountBalance)
      throw new Error(errorObject.insufficientBalance("Transfer"));
    this.accountBalance -= amount;

    newAccounts.forEach((account) => {
      if (account.accountNumber !== toAccount) {
        throw new Error("Account number does not exist!");
      }
    });
    
    return `Transfer of R${amount} was successfully made to Account ${toAccount}.`;
  }
}

const accountJoseph = new BankAccount(
  "Joseph Malete",
  "1997-11-22",
  "123456789",
  "Savings",
  5000
);

const accountThabo = new BankAccount(
  "Thabo Malete",
  "1998-11-22",
  "1234567890",
  "Savings",
  0
);

console.log("Thabo balance:", accountThabo.accountBalance);
console.log(accountJoseph.transfer(1000, accountThabo.accountNumber));
console.log("Thabo balance:", accountThabo.accountBalance);
// console.log(newAccounts.has(accountJoseph));

module.exports = { BankAccount };
