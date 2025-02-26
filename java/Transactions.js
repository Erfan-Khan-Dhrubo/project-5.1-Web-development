function Transactions(amount, type) {
  const x = document.getElementById("tgTransaction");
  const div = document.createElement("div");

  const defaultValue = document.getElementById("default");
  if (defaultValue) {
    defaultValue.remove();
  }

  const dateTime = showCurrentTime();
  div.innerHTML = `
    <div class="flex bg-white p-4 rounded-xl border gap-4 items-center my-2">
              <div class="bg-bg_color p-2 rounded-full">
                <img src="assets/wallet1.png" alt="" />
              </div>
              <div>
                <h3 class="font-semibold text-blur_text2 ">${amount}&nbsp; Taka &nbsp;${type}</h3>
                <p>Date: ${dateTime[0]} &nbsp; ${dateTime[1]}</p>
              </div>
            </div>
    `;

  x.appendChild(div);
}
