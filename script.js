//pedir o valor do dolar e salvar numa variavel
const inputUser = document.querySelector('button');
//alert(inputUser);
//funcao de conversao
var convertDollarToReal = 2.50;
var inputUser2;
inputUser.onclick = () => {
   inputUser2 = Number(document.querySelector('input').value.replace(',','.'))
  document.querySelector('h2').innerHTML = 'O Valor em real é R$' + (inputUser2 *         convertDollarToReal).toFixed(2)
};
//function conversor() {
 
//};
//conversor(inputUser);
//alert(inputUser2);

//var dollarValue = parseFloat(prompt("Qual valor em dolar que você quer converter? Separe o inteiro do decimal com ponto."));

//buscar taxa de conversao de dolar para real no dia


//funcao que calcula o dolar vezes a taxa de conversao, um numero vezes o outro
//function multiply(a,b) {
  //return a * b
  //};

//chamar funcao de conversao e armazenar o resultado na variavel do valor em real
//var realVallue = multiply(dollarValue,convertDollarToReal)

//apresnetar ao usuario o valor em real
//alert("O valor em real é: " + realVallue.toFixed(2) + ".");