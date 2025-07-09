function calcularNivel() {
  const nome = document.getElementById("nome").value.trim();
  const experiencia = parseInt(document.getElementById("experiencia").value);
  const resultado = document.getElementById("resultado");

  if (!nome || isNaN(experiencia) || experiencia < 0) {
    resultado.innerText = "⚠️ Preencha corretamente o nome e a experiência.";
    return;
  }

  let nivel = "";

  if (experiencia <= 1000) {
    nivel = "Ferro";
  } else if (experiencia <= 2000) {
    nivel = "Bronze";
  } else if (experiencia <= 5000) {
    nivel = "Prata";
  } else if (experiencia <= 7000) {
    nivel = "Ouro";
  } else if (experiencia <= 8000) {
    nivel = "Platina";
  } else if (experiencia <= 9000) {
    nivel = "Ascendente";
  } else if (experiencia <= 10000) {
    nivel = "Imortal";
  } else {
    nivel = "Radiante";
  }

  resultado.innerHTML = `✨ O Herói <strong>${nome}</strong> está no nível <strong>${nivel}</strong>!`;
}