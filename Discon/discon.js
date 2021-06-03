const disconBtn = document.getElementById("btn-discon");

disconBtn.addEventListener("click", () => {
  const typeDiscon = document.getElementById("type-discon").value;
  const moneyInput = document.getElementById('money-input').value;
  // console.log(typeof typeDiscon);
  // console.log(moneyInput);

  let max_disconJos = 20000;
  let max_disconMantap = 40000;

  let potongan = 0;
  let resultDiscon = 0;

  let totalBayar = 0;
  let uangKembalian = 0;

  if (typeDiscon === "DumbWaysJos") {
    if (moneyInput >= 50000) {
      potongan = 0.211;
      resultDiscon = potongan * moneyInput;
      if (resultDiscon > max_disconJos) {
        potongan = max_disconJos;
      }
    }
    totalBayar = moneyInput - potongan;
    uangKembalian =  moneyInput - totalBayar;
  }
  else if (typeDiscon === "DumbWaysMantap") {
    if (moneyInput >= 80000) {
      potongan = 0.3;
      resultDiscon = potongan * moneyInput;
      if (resultDiscon > max_disconJos) {
        potongan = max_disconMantap;
      }
    }
    totalBayar = moneyInput - potongan;
    uangKembalian =  moneyInput - totalBayar;
  }

  document.getElementById('discon-output').innerHTML = `
    <p>Uang yang harus dibayar: ${totalBayar}</p> 
    <p>Diskon: ${potongan}</p> 
    <p>Kembalian ${uangKembalian}</p>
  `;
})