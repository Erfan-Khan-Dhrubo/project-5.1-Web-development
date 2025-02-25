document.getElementById("login_btn").addEventListener("click", function () {
  const mobileNum = document.getElementById("Mobile_num").value;
  const pin = document.getElementById("pin").value;
  const pinInt = parseInt(pin);
  if (mobileNum.length === 11) {
    if (pinInt === 1414) {
      console.log("ho");
      window.location.href = "https://www.youtube.com/";
    } else {
      alert("Your Password doesn't match");
    }
  } else {
    alert("Your Mobile Number Should be 11 digits");
  }
});
