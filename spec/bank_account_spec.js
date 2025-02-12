const { BankAccount } = require("../src/bank_account");

describe("Bank Account class", () => {
    const accountJoseph = new BankAccount(
        "Joseph Malete",
        "1997-11-22",
        "123456789",
        "Savings",
        0
      );
  beforeEach(() => {
    accountJoseph.accountBalance = 0;
  });

  it("Initialize account with the correct balance", () => {
    expect(accountJoseph).toBeDefined();
    expect(accountJoseph.accountBalance).toBe(0);
  });
  
  it("Throw error if account type is incorrect", () => {
    expect(()=> {
    const accountJoseph = new BankAccount(
        "Joseph Malete",
        "1997-11-22",
        "123456789888",
        "Some Account",
        0
      );
    }).toThrowError("Invalid account type!");
  });

  describe('Deposit method',()=>{
    it('Make a correct Deposit amount into an account.',()=>{
        accountJoseph.deposit(500);
        expect(accountJoseph.accountBalance).toBe(500);
    })
    
    it('Throw an error if deposit amount is invalid type.',()=>{
        expect(()=> {accountJoseph.deposit("500")}).toThrowError("Invalid amount type!");
    })
  })
});
