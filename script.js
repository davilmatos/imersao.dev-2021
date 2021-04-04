const okButton = document.querySelector("button");

okButton.onclick = () => {
  var firstValue = Number(document.getElementById("first").value);
  var secondValue = Number(document.getElementById("second").value);
  var operation = document.getElementById("operacoes");
  var option = operation.options[operation.selectedIndex].text;
  var result;
  if (option == "Soma")
    {
      result = firstValue + secondValue;  
    } else if (option == "Subtração")
    {
      result = firstValue - secondValue;
    } else if (option == "Multiplicação")
    {
      result = firstValue * secondValue;
    } else {
      result = firstValue / secondValue;
    };
   document.getElementById("resultado").innerHTML = "O resultado da operação é: " + result;
 };