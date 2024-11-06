const form = document.getElementById("form");
const username = document.getElementById("username");
const idade = document.getElementById("idade");
const cadastroList = document.getElementById("cadastroList");

let cadastros = [];
let editIndex = null;

form.addEventListener("submit", (event) => {
    event.preventDefault();
    usernamecheck();
    idadeCheck();

    if (username.value && idade.value > 0) {
        if (editIndex === null) {
            // Adiciona novo cadastro ao array
            cadastros.push({ nome: username.value, idade: idade.value });
        } else {
            // Edita cadastro existente
            cadastros[editIndex] = { nome: username.value, idade: idade.value };
            editIndex = null;
        }

        // Limpa os campos e exibe os cadastros
        username.value = "";
        idade.value = "";
        displayCadastros();
    }
});

function displayCadastros() {
    cadastroList.innerHTML = ""; // Limpa a exibição atual

    cadastros.forEach((cadastro, index) => {
        const div = document.createElement("div");
        div.classList.add("cadastro-item");
        div.innerHTML = `
            <p>Nome do Pet: ${cadastro.nome}</p>
            <p>Idade do Pet: ${cadastro.idade}</p>
            <button onclick="editCadastro(${index})">Editar</button>
            <button onclick="deleteCadastro(${index})">Excluir</button>
        `;
        cadastroList.appendChild(div);
    });
}

//  editar o cadastro
function editCadastro(index) {
    const cadastro = cadastros[index];
    username.value = cadastro.nome;
    idade.value = cadastro.idade;
    editIndex = index;
}

// excluir o cadastro
function deleteCadastro(index) {
    cadastros.splice(index, 1);
    displayCadastros();
}

// Validação  nome
function usernamecheck() {
    const usernameValue = username.value;
    if (usernameValue === "") {
        erroInput(username, "Preencha esse campo!");
    } else {
        const formItem = username.parentElement;
        formItem.classList = "form-content";
    }
}

// Validação idade
function idadeCheck() {
    const idadeValue = parseInt(idade.value, 10);
    if (!idadeValue) {
        erroInput(idade, "A idade é obrigatória!");
    } else if (idadeValue <= 0) {
        erroInput(idade, "A idade é muito baixa!");
    } else {
        const formItem = idade.parentElement;
        formItem.classList = "form-content";
    }
}

// Função para exibir mensagem de erro
function erroInput(input, message) {
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("a");
    textMessage.innerText = message;
    formItem.className = "form-content error";
}
