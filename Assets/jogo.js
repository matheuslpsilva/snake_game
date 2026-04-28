//CONFIGURAÇÃO

const COLUNAS = 20;
const LINHAS = 20;
const PONTOS_POR_COMIDA = 10;

const VELOCIDADE = parseInt(localStorage.getItem("velocidade_cobra")) || 130;

//VARIÁVEIS DE ESTADO DO JOGO

let cobra = []; //Armazena as posições da cobra
let direcao = { x: 1, y: 0 }; //Direção autal do movimento
let proximaDirecao = { x: 1, y: 0 }; //Direção da próxima tickada
let comida = { x: 0, y: 0 }; //Armazena a posição da comida
let pontacao = 0;
let recorde = parseInt(localStorage.getItem("recorde_cobra")) || 0;
let intervalo = null; //Referência do setIntervalo do loop infinito do jogo

//GRADE

const grade = document.getElementById("grade");
let celulas = [];

function criarGrade() {
  grade.innerHTML = "";
  celulas = [];

  for (let y = 0; y < LINHAS; y++) {
    const linha = [];

    for (let x = 0; x < COLUNAS; x++) {
      const celula = document.createElement("div");
      celula.className = "celula";
      grade.appendChild(celula);
      linha.push(celula);
    }
    celulas.push(linha);
  }
}

function limparGrade() {
  for (let y = 0; y < LINHAS; y++) {
    for (let x = 0; x < COLUNAS; x++) {
      celulas[y][x].className = "celula";
    }
  }
}

//Desenhar a cobra e a comida na grade
function renderizar() {
  limparGrade();

  //Desenha a comida
  celulas[comida.y][comida.x].classList.add("comida");

  //Desenha o corpo da cobra
  for (let i = 1; i < cobra.length; i++) {
    celulas[cobra[i].y][cobra[i].x].classList.add("cobra");
  }

  //Desenha a cabeça da cobra
  celulas[cobra[0].y][cobra[0].x].classList.add("cabeca");
}

//INICIALIZAÇÃO

function iniciar() {
  cobra = [
    { x: 10, y: 10 },
    { x: 9, y: 10 },
    { x: 8, y: 10 },
  ];

  direcao = {x:1, y:0};
  proximaDirecao = {x:1, y:0};
  pontuacao = 0;
  emJogo = true;

  atualizarHUD();
  gerarComida();
  renderizar();
  esconderOverlay();

  //loop
  if (intervalo) clearInterval(intervalo);

  intervalo = setInterval(tick, VELOCIDADE);
}

function reiniciar(){
    iniciar();
}

function tick() {
   continuamosNaProximaAula.daSilva.getElementById("grade");
}