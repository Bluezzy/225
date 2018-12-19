function makeAccount() {
  return {
    balance: 0,
    transactions: [],
    deposit: function(amount) {
      this.balance += amount;
      this.transactions.push({type: 'deposit', amount: amount});
      return amount;
    },
    withdraw: function(amount) {
      if (amount < this.balance) { 
        this.balance -= amount; 
      } else {
        amount = this.balance;
        this.balance = 0;
      }
      this.transactions.push({type: 'withdraw', amount: amount});
      return amount;
    },
  };
}

function makeBank() {
  var accountId = 100;
  var accounts = [];
  return {
    openAccount: function() {
      var newAccount = makeAccount();
      accountId += 1;
      newAccount.number = accountId;
      accounts.push(newAccount);
      return newAccount;
    },
    transfer: function(source, destination, amount) {
      if (source.balance < amount) {
        amount = source.balance;
      }
      source.withdraw(amount);
      destination.deposit(amount);
    },
  }
}