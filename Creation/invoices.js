function makeInvoice(services) {
  services = services || {};
  var invoice = {
    phone: services.phone || 3000,
    internet: services.internet || 5000
  };

  invoice.total = function() {
    return invoice.phone + invoice.internet;
  }

  invoice.addPayment = function(payments) {
    invoice.payments.push(payment);
  }

  invoice.addPayments = function(payments) {
    var i;

    for(i = 0; i < payments.length; i++) {
      invoice.addPayment(payments[i]);
    }
  }

  invoice.paymentTotal = function() {
    var totalPaid = 0;
    var i;

    for (i = 0; i < invoice.payments.length; i++) {
      totalPaid += invoice.payments[i].total();
    }

    return totalPaid;
  }

  invoice.amountDue = function() {
    return this.total() - this.paymentTotal();
  };

  return invoice;
}

function createPayment(services) {
  services = services || {};
  services.total = function() {
    var phoneAmount = this.phone || 0;
    var internetAmount = this.internet || 0;
    var amount = this.amount || (phoneAmount + internetAmount);
    return amount;
  }
  return services;
}

function paymentTotal(payments) {
  var total = 0;
  var i;

  for (i = 0; i < payments.length; i += 1) {
    total += payments[i].total();
  }

  return total;
}