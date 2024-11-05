const form = document.getElementById("form");
const username = document.getElementById("username");
const idade = document.getElementById("idade");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    
    usernamecheck();
    idadeCheck();
    erroInput();
});

function usernamecheck() {
    const usernameValue = username.value;

    if (usernameValue === "") {
        // Mostra aviso de erro se o campo estiver vazio
        erroInput(username, "Preencha esse campo!");
    } else {
        // Limpa o erro caso o campo esteja preenchido
        const formItem = username.parentElement;
        formItem.classList="form-content"
    }
}

function erroInput(input, message) {
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("a");

    textMessage.innerText = message;
    formItem.className = "form-content error"; // Aplica a classe de erro
}
function idadeCheck(){
    const idadeValue=idade.value;
     
    if(idadeValue === ""){
        erroInput (idade,"A idade é obrigatória!")
    }else if (idadeValue <= 0){
        erroInput (idade,"A idade é muito baixa!")
 
    }else{
        const formItem = idade.parentElement;
        formItem.className="form-content "
    }
}
//função que some e retorna a div 



