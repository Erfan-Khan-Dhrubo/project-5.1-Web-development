// Transforming str to int

function strConverter(id) {
  const strValue = document.getElementById(id).value;
  const convertedValue = parseInt(strValue);
  return convertedValue;
}
// Transforming str to int (innerText)

function strConverterInnerText(id) {
  const strValue = document.getElementById(id).innerText;
  const convertedValue = parseInt(strValue);
  return convertedValue;
}
// setting innerText value
function settingValueInnerText(id, val) {
  document.getElementById(id).innerText = val;
}

// setting  value
function settingValue(id, val) {
  document.getElementById(id).value = val;
}

// toggle function

function toggleSection(id) {
  const divisions = document.querySelectorAll(".tgClass");
  for (const i of divisions) {
    i.style.display = "none";
  }
  const visibleID = document.getElementById(id);
  visibleID.style.display = "block";
}

// Getting Time

function showCurrentTime() {
  // Create a new Date object
  const now = new Date();

  // Get the current date and time
  const date = now.toLocaleDateString();
  const time = now.toLocaleTimeString();

  // Format the date and time
  const dateTimeString = `Date: ${date}, Time: ${time}`;
  console.log(dateTimeString);
  return [date, time];
}
