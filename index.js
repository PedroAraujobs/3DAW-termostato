window.onload = function () {
  const botao = document.getElementById("BotaoAtualizar");
  const input = document.getElementById("InputTemperatura");
  const caixa = document.getElementById("termometro");

  botao.addEventListener("click", function () {
    const valor = parseFloat(input.value);

    if (isNaN(valor)) {
      caixa.style.backgroundColor = "#001233";
      return;
    }

    if (valor < 29) {
      caixa.style.backgroundColor = "#a1c6ea";
    } else if (valor < 45) {
      caixa.style.backgroundColor = "#fdf89c";
    } else if (valor <= 60) {
      caixa.style.backgroundColor = "#f15156";
    } else if (valor > 60) {
      caixa.style.backgroundColor = "#721121";
    }
  });
};
