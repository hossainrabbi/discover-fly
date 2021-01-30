function handleFlyTicket(ticket, isIncrement) {
  const ticketInput = document.getElementById(ticket + '-input');
  const ticketCount = parseInt(ticketInput.value);
  let ticketNewCount = ticketCount;
  if (isIncrement === true) {
    ticketNewCount = ticketCount + 1;
  }
  if (isIncrement === false && ticketNewCount > 0) {
    ticketNewCount = ticketCount - 1;
  }
  ticketInput.value = ticketNewCount;

  totalAmount();
  fullAmount(ticket, ticketNewCount);
}

// Total Amount Calculated
function totalAmount() {
  const firstClassCount = getCount('first-class');
  const economyCount = getCount('economy');
  const subtotal = firstClassCount * 150 + economyCount * 100;
  document.getElementById('subtotal').innerText = subtotal;

  const tax = Math.round((subtotal / 100) * (100 + 10) - subtotal);
  document.getElementById('tax').innerText = tax;

  return (document.getElementById('total').innerText = subtotal + tax);
}

function getCount(ticket) {
  const ticketInput = document.getElementById(ticket + '-input');
  return parseInt(ticketInput.value);
}

// extra
function fullAmount(ticket, ticketCount) {
  if (ticket == 'first-class') {
    document.getElementById('first-class-value').innerText = ticketCount;
    document.getElementById('first-class-total').innerText = ticketCount * 150;
  }
  if (ticket == 'economy') {
    document.getElementById('economy-value').innerText = ticketCount;
    document.getElementById('economy-total').innerText = ticketCount * 100;
  }
  document.getElementById('full-amount').innerText = totalAmount();
}

// Display Show and Hide
function orderTicketBtn() {
  displayProperty('block');
}

function popupHide() {
  displayProperty('none');
}

function displayProperty(display) {
  document
    .getElementsByClassName('full-amount-area')[0]
    .setAttribute('style', 'display:' + display);
}
