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

  subtotal();
}

// Subtotal
function subtotal() {
  const firstClassCount = getCount('first-class');
  const economyCount = getCount('economy');
  const subtotal = firstClassCount * 150 + economyCount * 100;
  document.getElementById('subtotal').innerText = subtotal;

  const tax = Math.round((subtotal / 100) * (100 + 10) - subtotal);
  document.getElementById('tax').innerText = tax;

  document.getElementById('total').innerText = subtotal + tax;
}

function getCount(ticket) {
  const ticketInput = document.getElementById(ticket + '-input');
  return parseInt(ticketInput.value);
}
