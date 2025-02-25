document
  .getElementById("cashOut_btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const agentNum = document.getElementById("agent_num").value;
    const pin = document.getElementById("pin_cashOut").value;
    let cashOutMoney = document.getElementById("amount_cashOut").value;
    if (!cashOutMoney) {
      cashOutMoney = 0;
    }
    const intPin = parseInt(pin);
    const intAmount = parseFloat(cashOutMoney);
    const currentAmount = document.getElementById("current_amount").innerText;
    if (agentNum.length !== 11) {
      alert("Number should be 11 digits");
    } else {
      if (intPin === 1414) {
        const finalAmount = parseFloat(currentAmount) - intAmount;
        document.getElementById("current_amount").innerText = finalAmount;
        document.getElementById("amount_cashOut").value = "";
      } else {
        alert("Pin does not match");
      }
    }
  });
