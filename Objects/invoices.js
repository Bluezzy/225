var invoices = {};
invoices.unpaid = [];
invoices.add = function(clientName, anyAmount) {
  this.unpaid.push( {
    name: clientName,
    amount: anyAmount,
  });
}
invoices.totalDue = function() {
  var total = 0;
  this.unpaid.forEach(function(content) {
    total += content.amount;
  });
  return total;
}

invoices.add('Corsica Flash', 900);
invoices.add('LaunchSchool', 200);
invoices.add('Battery Online', 400);
console.log(invoices.totalDue());

invoices.paid = [];
invoices.payInvoice = function(clientName) {
  var newlyUnpaid = [];
  this.unpaid.forEach(function(content) {
    if (content.name === clientName) {
      invoices.paid.push(content);
    } else {
      newlyUnpaid.push(content);
    }
  });
  this.unpaid = newlyUnpaid;
};

invoices.totalPaid = function() {
  var total = 0;
  this.paid.forEach(function(content) {
    total += content.amount;
  });
  return total;
}

invoices.payInvoice('LaunchSchool');
invoices.payInvoice('Battery Online');