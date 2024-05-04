const displayDateTimeBtn = document.getElementById('displayDateTime');
const dateTimeDisplay = document.getElementById('dateTime');

displayDateTimeBtn.addEventListener('click', function() {
  const currentDateTime = new Date();
  const dateTimeString = currentDateTime.toLocaleString();
  dateTimeDisplay.textContent = `Date and Time: ${dateTimeString}`;
});