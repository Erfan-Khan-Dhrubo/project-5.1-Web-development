document
  .getElementById("cashOut_btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const agentNum = document.getElementById("agent_num").value;
    const intPin = strConverter("pin_cashOut");
    let intAmount = strConverter("amount_cashOut");
    if (!intAmount) {
      intAmount = 0;
    }
    const currentAmount = strConverterInnerText("current_amount");

    if (agentNum.length !== 11) {
      alert("Number should be 11 digits");
    } else {
      if (intPin === 1414) {
        const finalAmount = currentAmount - intAmount;
        settingValueInnerText("current_amount", finalAmount);
        settingValue("amount_cashOut", "");
        Transactions(intAmount, "Cash Out");
      } else {
        alert("Pin does not match");
      }
    }
  });
