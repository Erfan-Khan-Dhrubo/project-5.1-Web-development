// Clicking effect

function clickHandler(idBtn, idSection) {
  document.getElementById(idBtn).addEventListener("click", function (event) {
    event.preventDefault();
    const btnColor = document.querySelectorAll("#btnCol button");
    for (const i of btnColor) {
      i.style.borderColor = "#EAEAEA";
      i.style.backgroundColor = "white";
    }
    const BTN = document.getElementById(idBtn);
    BTN.style.borderColor = "rgba(8, 116, 242, 1)";
    BTN.style.backgroundColor = "rgba(8, 116, 242, 0.05)";
    toggleSection(idSection);
  });
}

clickHandler("btnAdd", "tgAdd");
clickHandler("btnCash", "tgCash");
clickHandler("btnTransfer", "tgTransfer");
clickHandler("btnBonus", "tgBonus");
clickHandler("btnBill", "tgBill");
