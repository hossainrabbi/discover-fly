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
  handleId('subtotal').innerText = subtotal;

  const tax = Math.round((subtotal / 100) * (100 + 10) - subtotal);
  handleId('tax').innerText = tax;

  return (handleId('total').innerText = subtotal + tax);
}

// Input ticket handle
function getCount(ticket) {
  const ticketInput = document.getElementById(ticket + '-input');
  return parseInt(ticketInput.value);
}

// All Amount Calculated for 'Book Now' button
function fullAmount(ticket, ticketCount) {
  if (ticket == 'first-class') {
    handleId('first-class-value').innerText = ticketCount;
    handleId('first-class-total').innerText = ticketCount * 150;
  }
  if (ticket == 'economy') {
    handleId('economy-value').innerText = ticketCount;
    handleId('economy-total').innerText = ticketCount * 100;
  }
  handleId('full-amount').innerText = totalAmount();
}

// Id handle function
function handleId(id) {
  return document.getElementById(id);
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
