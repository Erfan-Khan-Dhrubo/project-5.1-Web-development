document
  .getElementById("add_money_btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const bankName = document.getElementById("bank").value;
    let intAmount = strConverter("amount_add");
    if (!intAmount) {
      intAmount = 0;
    }
    const intPin = strConverter("pin_add");
    const currentAmount = strConverterInnerText("current_amount");

    if (bankName === "Select Bank") {
      alert("Select a Bank");
    } else {
      if (intPin === 1414) {
        const finalAmount = currentAmount + intAmount;
        settingValueInnerText("current_amount", finalAmount);
        settingValue("amount_add", "");
        Transactions(intAmount, "Add Money");
      } else {
        alert("Pin does not match");
      }
    }
  });
