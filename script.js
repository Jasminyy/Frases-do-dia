$(document).ready(function () {
  function atualizarHorario() {
    const hora = new Date().getHours();
    let saudacao = "";

    if (hora >= 5 && hora < 12) saudacao = "Bom dia! 🌞";
    else if (hora >= 12 && hora < 18) saudacao = "Boa tarde! 🌇";
    else saudacao = "Boa noite! 🌙";

    $("#horario").text(saudacao);
  }

  atualizarHorario();

  // Busca a frase do dia via AJAX
  const API_URL = "http://localhost:3000/frase";

  $.ajax({
    url: API_URL,
    method: "GET",
    success: function (res) {
      $("#frase").text("Frase do dia: " + res.frase);
    },
    error: function (xhr, status, error) {
      console.error("Erro AJAX:", error);
      $("#frase").text("Não foi possível carregar a frase 😢");
    }
  });
});
