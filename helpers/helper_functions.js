const { newAccounts } = require("../helpers/helper_objects");

function accountExists(obj) {
  newAccounts.forEach((account) => {
    if (account.accountNumber === obj.accountNumber) {
      throw new Error("Account number exists!");
    }
  });
  newAccounts.push(obj);
}

module.exports={accountExists}
