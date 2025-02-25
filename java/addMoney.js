document
  .getElementById("add_money_btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const bankName = document.getElementById("bank").value;
    let addMoney = document.getElementById("amount_add").value;
    if (!addMoney) {
      addMoney = 0;
    }
    const pin = document.getElementById("pin_add").value;
    const intPin = parseInt(pin);
    const intAmount = parseFloat(addMoney);
    const currentAmount = document.getElementById("current_amount").innerText;
    if (bankName === "Select Bank") {
      alert("Select a Bank");
    } else {
      if (intPin === 1414) {
        const finalAmount = parseFloat(currentAmount) + intAmount;
        document.getElementById("current_amount").innerText = finalAmount;
        document.getElementById("amount_add").value = "";
      } else {
        alert("Pin does not match");
      }
    }
  });
