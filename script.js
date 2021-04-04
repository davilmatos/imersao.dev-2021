//pegar nomes dos jogadores para montar a lista de jogadores
const players = [
  {
    name: "Jogador1",
    matches: 0,
    victories: 0,
    ties: 0,
    defeats: 0,
    points: 0
  },
  {
    name: "Jogador2",
    matches: 0,
    victories: 0,
    ties: 0,
    defeats: 0,
    points: 0
  },
];

var htmlTable = "";

function allToZero() {
  for(var i = 0; i < players.length; i++) {
    players[i].matches = 0;
    players[i].victories = 0;
    players[i].ties = 0;
    players[i].defeats = 0;
    players[i].points = 0;
  };
};

function startPlay() {
  allToZero();
  var table = document.querySelector("#table");
  htmlTable = ""
  table.innerHTML = htmlTable;
  for(var i = 0; i < players.length; i++) {
    htmlTable += "<tr><td>" + players[i].name + "</td>"
    htmlTable += "<td>" + players[i].matches + "</td>"
    htmlTable += "<td>" + players[i].victories + "</td>"
    htmlTable += "<td>" + players[i].ties + "</td>"
    htmlTable += "<td>" + players[i].defeats + "</td>"
    htmlTable += "<td>" + players[i].points + "</td>"
    htmlTable += "<td><button onclick='addVictorie(" + i + ")'>Vitória</button></td>"
    htmlTable += "<td><button onclick='addTie(" + i + ")'>Empate</button></td>"
    htmlTable += "<td><button onclick='addDefeat(" + i + ")'>Derrota</button></td></tr>"
  }
  table.innerHTML = htmlTable;
 
};

function printTable() {
  var table = document.querySelector("#table");
  htmlTable = "";
  for(var i = 0; i < players.length; i++) {
    htmlTable += "<tr><td>" + players[i].name + "</td>"
    htmlTable += "<td>" + players[i].matches + "</td>"
    htmlTable += "<td>" + players[i].victories + "</td>"
    htmlTable += "<td>" + players[i].ties + "</td>"
    htmlTable += "<td>" + players[i].defeats + "</td>"
    htmlTable += "<td>" + players[i].points + "</td>"
    htmlTable += "<td><button onclick='addVictorie(" + i + ")'>Vitória</button></td>"
    htmlTable += "<td><button onclick='addTie(" + i + ")'>Empate</button></td>"
    htmlTable += "<td><button onclick='addDefeat(" + i + ")'>Derrota</button></td></tr>"
  }
  table.innerHTML = htmlTable;
};

function addMatch() {
  for (var i = 0; i <players.length; i++) {
    players[i].matches++;
    
  };
};

function addVictorie(i) {
  players[i].victories++;
  calculatePoints(i);
  addMatch()
  printTable()
};

function addTie(i) {
  for (var i = 0; i <players.length; i++) {
    players[i].ties++;
    calculatePoints(i);  
  };
  addMatch()
  printTable();
};

function addDefeat(i) {
  players[i].defeats++;
  printTable();
};

function calculatePoints(i) {
  players[i].points = (players[i].victories * 3) + players[i].ties;
};

function openRegisterArea() {
  console.log("clicou")
  document.querySelector(".button-register1").classList.add("on");
  
}