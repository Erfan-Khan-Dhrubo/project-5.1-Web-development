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
