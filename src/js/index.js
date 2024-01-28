const botao = document.querySelector(".Btn-plataforma");
const elementoPlataformas = document.querySelector(".Btn-plataforma .plataformas");

botao.addEventListener("click", () => {
    elementoPlataformas.classList.toggle("ativo");
});