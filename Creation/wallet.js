//Pseudo Classical Pattern
function Wallet() {
	var amount = 'secret';
}

Wallet.prototype.getAmount = function() {
	// amount can't be accessed from here
}

// Classical Pattern
function Wallet() {
	var amount = 'secret';
	this.getAmount = function() {
		return amount;
	}
}

var myWallet = new Wallet();
myWallet.getAmount() // returns 'secret'


