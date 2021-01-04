 const loginBtn = document.getElementById("loginBtn");
 loginBtn.addEventListener("click", function () {
   const loginArea = document.getElementById("login-area");
   loginArea.style.display = "none";
   const transactionArea = document.getElementById("transaction-area");
   transactionArea.style.display = "block";
 });


document.getElementById("addDeposit").addEventListener("click", function () {
  const totalDepositNumber = getInputNumber("depositAmount");
  totalAmountHandle("currentDeposit", totalDepositNumber);
  totalAmountHandle("amountBalance", totalDepositNumber);
  document.getElementById("depositAmount").value = "";
});


document.getElementById("addWithdraw").addEventListener("click", function () {
  const totalWithdrawNumber = getInputNumber("withdrawAmount");
  totalAmountHandle("currentWithdraw", totalWithdrawNumber);
  totalAmountHandle("amountBalance", -1 * totalWithdrawNumber);
  document.getElementById("withdrawAmount").value = "";
});


function getInputNumber(id) {
  const amount = document.getElementById(id).value;
  const amountNumber = parseInt(amount);
  return amountNumber;
}

function totalAmountHandle(id, number) {
  const current = document.getElementById(id).innerText;
  const currentNumber = parseFloat(current);
  const totalAmount = number + currentNumber; ;
  document.getElementById(id).innerText = totalAmount;
}
