let amigos = [];
let nomeUsuario = prompt("Digite seu nome:");


function adicionarAmigo() {
    let amigoInput = document.getElementById("amigo");
    let amigo = amigoInput.value.trim();
    if(amigo !== "") {
        amigos.push(amigo);
        amigoInput.value = "";
        exibirAmigos();
    } else {
        alert("Por favor, insira um nome.");
        return;
    }
    if (amigo === nomeUsuario) {
        alert("Você não pode sortear seu nome, digite o nome de outro amigo.");
        amigos.pop(); // Remove o nome do usuário da lista
        amigoInput.value = ""; // Limpa o campo de entrada
        limparLista();
    }
}

function limparLista() {
    amigos = [];
    exibirAmigos();
}

function exibirAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigos.forEach(function(amigo) {
        let item = document.createElement("li");
        item.textContent = amigo;
        lista.appendChild(item);
    });
}

function sortearAmigo() {
    amigos.sort();
    exibirAmigos();
    let sorteado = amigos[Math.floor(Math.random() * amigos.length)];
    let resultado = document.getElementById("resultado");
    resultado.textContent = `O amigo sorteado foi: ${sorteado}`;
    resultado.style.display = "block";
}


