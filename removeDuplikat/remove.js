const btnRemove = document.getElementById("btn-remove");

btnRemove.addEventListener("click", () => {
  const charInput = document.getElementById("char-input").value;

  let splitInput = charInput.split("");
  console.log(splitInput);

  let result = splitInput.filter((item, index) => splitInput.indexOf(item) === index);

  document.getElementById("pascal-output").innerHTML = result.join("");
})