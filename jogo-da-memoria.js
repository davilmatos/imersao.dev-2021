const events = [
 {
  event: prompt("Escolha eventos e datas para o segundo jogador adivinhar. Você deve cadastrar 4 eventos. Escreva o evento 1:"),
  date: prompt("Escreva a data do evento 1 no formato DD/MM/AAAA:")
 },
 {
  event: prompt("Escreva o evento 2:"),
  date: prompt("Escreva a data do evento 2 no formato DD/MM/AAAA:")
 },
 {
  event: prompt("Escreva o evento 3:"),
  date: prompt("Escreva a data do evento 3 no formato DD/MM/AAAA:")
 },
 {
  event: prompt("Escreva o evento 4:"),
  date: prompt("Escreva a data do evento 4 no formato DD/MM/AAAA:")
 },
];

var winnerPoints = parseInt(prompt("Digite quantos pontos o segundo jogador deve fazer para ser o campeão:"));
document.getElementById("winner-points").innerHTML = winnerPoints;
var inicialChances = parseInt(prompt("Digite quantas tentativas o segundo jogador terá:"))
var forTheLooser = prompt("Escreva qual prenda o segundo jogador pagará ao dar gamer over:")
var forTheWinner = prompt("Escreva o prêmio que o segundo jogador receberá ao ganhar o jogo:")
var eventAleatory = parseInt((Math.random() * (4 - 0) + 0));
var points = 0;
var chancesLeft = inicialChances;
var answerDate;
var game = "on";
var answered = "off";

document.getElementById("points").innerHTML = points;
document.getElementById("chances-left").innerHTML = chancesLeft;
document.getElementById("event").innerHTML = events[eventAleatory].event;

function submitDate() {
  if (game === "on") {
    answerDate = document.getElementById("answer-date").value;
    if (answerDate === events[eventAleatory].date & answered === "off") {
        document.getElementById("result").innerHTML = "correta! Ganhou 1 ponto!";
        points = ++points;
        document.getElementById("points").innerHTML = points;
        answered = "on"
    } else if (answerDate === events[eventAleatory].date & answered === "on") {
        document.getElementById("result").innerHTML = "Você já acertou, gere um novo envento no botão abaixo:";
    } else if (answerDate != events[eventAleatory].date) {
        document.getElementById("result").innerHTML = "errada! Perdeu 1 tentativa!";
        chancesLeft = --chancesLeft;
        document.getElementById("chances-left").innerHTML = chancesLeft;
    } 
  
  if (chancesLeft === 0) {
  document.getElementById("end-game").innerHTML = "Game Over! A data era " + events[eventAleatory].date + ". Sua prenda é: " + forTheLooser + ".";
  game = "off";
  return;
  };
  if (points === winnerPoints) {
  document.getElementById("end-game").innerHTML = "Você ganhou! Você merece: " + forTheWinner +".";
  game = "off";
  return;
  };
 } else {
   document.getElementById("end-game").innerHTML = "Jogo já acabou atualize a página para registrar novos eventos ou clique em Começar de novo para reiniciar a partida com os mesmos eventos";
   };
};

function newEvent() {
    eventAleatory = parseInt((Math.random() * (6 - 0) + 0));
    document.getElementById("event").innerHTML = events[eventAleatory].event;
    answered = "off";
};

function restart() {
  points = 0;
  document.getElementById("points").innerHTML = points;
  chancesLeft = inicialChances;
  document.getElementById("chances-left").innerHTML = chancesLeft;
  game = "on";
  answered = "off";
  document.getElementById("end-game").innerHTML = "";
  document.getElementById("result").innerHTML = "";
  newEvent(); 
};



//console.log(events[eventAleatory].event);
