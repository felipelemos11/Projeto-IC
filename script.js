function mostrarMensagem() {
  alert("Agradeço pela visita ao meu portfólio! Caso queira saber mais, é só me contatar.");
}

document.addEventListener("DOMContentLoaded", () => {
  const botaoTema = document.getElementById("toggle-tema");
  const body = document.body;

  
  const temaSalvo = localStorage.getItem("tema");
  if (temaSalvo === "escuro") {
    body.classList.add("dark-mode");
  }

  botaoTema?.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    const temaAtual = body.classList.contains("dark-mode") ? "escuro" : "claro";
    localStorage.setItem("tema", temaAtual);
  });
});
