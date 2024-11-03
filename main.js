const form = document.getElementById("form");
const username = document.getElementById("username");
const idade = document.getElementById("idade");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    alert("Cadastro feito, meu patrão!");
});
