const pascalBtn = document.getElementById("btn-pascal");

pascalBtn.addEventListener("click", () => {
  const inputPattern = parseInt(document.getElementById("pascal-input").value);
  let arrayPattern = [];
  for (let i = 1; i <= inputPattern+1; i++){
    let pattern = 1;
    for (let j = 1; j <= i; j++){
      arrayPattern.push(`${pattern} &nbsp;`);
      pattern = pattern * (i - j) / j;
    }
    arrayPattern.push("</br>");
  }

  document.getElementById("pascal-output").innerHTML = arrayPattern.join("");
})