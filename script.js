// Lista de datas de alcance objetivo
const tobjs = [
  new Date("2024-02-28T00:00:00"), // Data do Objetivo 1
  new Date("2024-03-31T00:00:00"), // Data do Objetivo 2
  new Date("2024-08-01T00:00:00"), // Data do Objetivo 3
  new Date("2024-04-01T00:00:00"), // Data do Objetivo 4
];

// IDs dos elementos HTML que exibirão a contagem regressiva
const ids = ["cont1", "cont2", "cont3", "cont4"];

// Array para armazenar intervalos de atualização
const intervalos = [];

// Função para atualizar contadores quando a página carrega
document.addEventListener("DOMContentLoaded", function () {
  for (let i = 0; i < tobjs.length; i++) {
    intervalos.push(setInterval(atualizarContadores, 1000)); // Atualiza a cada 1 segundo
  }
  atualizarContadores(); // Atualiza contadores inicialmente
});

// Função para calcular o tempo restante
function calculaTempo(tempoObjetivo) {
  let tempoAtual = new Date();
  let tempoFinal = tempoObjetivo - tempoAtual;

  // Se a data já passou, exibe "Prazo Finalizado."
  if (tempoFinal < 0) {
    return "Prazo Finalizado.";
  }

  // Cálculo de segundos, minutos, horas e dias
  let segundos = Math.floor(tempoFinal / 1000);
  let minutos = Math.floor(segundos / 60);
  let horas = Math.floor(minutos / 60);
  let dias = Math.floor(horas / 24);

  // Formatação dos valores para exibição
  segundos %= 60;
  minutos %= 60;
  horas %= 24;
  dias = dias.toString().padStart(2, "0");
  horas = horas.toString().padStart(2, "0");
  minutos = minutos.toString().padStart(2, "0");
  segundos = segundos.toString().padStart(2, "0");

  // Retorna a string formatada com a contagem regressiva
  return `${dias} <span class="cdt">Dias</span> ${horas} <span class="cdt">Horas</span> ${minutos} <span class="cdt">Minutos</span> ${segundos} <span class="cdt">Segundos</span>`;
}

// Função para atualizar os contadores na tela
function atualizarContadores() {
  for (let i = 0; i < tobjs.length; i++) {
    const elemento = document.getElementById(ids[i]);
    if (elemento) {
      const tempoFinal = tobjs[i] - new Date();
      const tempoFormatado = calculaTempo(tobjs[i]);
      elemento.innerHTML = tempoFormatado;
    }
  }
}

// Função para calcular e exibir a contagem regressiva para um objetivo específico (usuário)
function usercalctemp() {
  try {
    // Obter a data limite do campo "tempo"
    const tempoLimite = new Date(document.getElementById("tempo").value);

    // Validar a data
    if (!tempoLimite || isNaN(tempoLimite.getTime())) {
      return "Data inválida.";
    }

    // Calcular o tempo restante
    const tempoAtual = new Date();
    const tempoFinal = tempoLimite - tempoAtual;

    // Se a data já passou, exibe "Prazo Finalizado."
    if (tempoFinal < 0) {
      return "Prazo Finalizado.";
    }

    // Cálculo de segundos, minutos, horas e dias
    let segundos = Math.floor(tempoFinal / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);

    // Formatação dos valores para exibição
    segundos %= 60;
    minutos %= 60;
    horas %= 24;
    dias = dias.toString().padStart(2, "0");
    horas = horas.toString().padStart(2, "0");
    minutos = minutos.toString().padStart(2, "0");
    segundos = segundos.toString().padStart(2, "0");

    // Exibir a contagem regressiva no elemento "cont5"
    const elemento = document.getElementById("cont5");
    if (elemento) {
      elemento.innerHTML = `${dias} <span class="cdt">Dias</span> ${horas} <span class="cdt">Horas</span> ${minutos} <span class="cdt">Minutos</span> ${segundos} <span class="cdt">Segundos</span>`;
    }
  } catch (error) {
    console.error(error);
    alert("Erro ao calcular a contagem regressiva.");
  }
}