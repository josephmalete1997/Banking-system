const accountTypes = ["savings", "cheque", "investment"];
const newAccounts = [];
const errorObject = {
  insufficientBalance: (text) =>
    `${text} cannot be made! Insufficient account balance.`,
};

module.exports = { accountTypes, newAccounts, errorObject };
