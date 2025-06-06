function mostrarMensagem() {
  alert("Agradeço pela visita ao meu portfólio! Caso queira saber mais, é só me contatar.");
}

document.addEventListener("DOMContentLoaded", () => {
  const botaoTema = document.getElementById("toggle-tema");
  const body = document.body;

  if (localStorage.getItem("tema") === "claro") {
    body.classList.add("light-mode");
  }

  botaoTema?.addEventListener("click", () => {
    body.classList.toggle("light-mode");
    localStorage.setItem("tema", body.classList.contains("light-mode") ? "claro" : "escuro");
  });
});
