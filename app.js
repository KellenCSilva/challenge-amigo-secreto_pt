let amigos = [];

function adicionarAmigo() {
    let amigoInput = document.getElementById("amigo");
    let amigo = amigoInput.value.trim();
    if(amigo !== "") {
        amigos.push(amigo);
        amigoInput.value = "";
        exibirAmigos();
    } else {
        alert("Por favor, insira um nome válido.");
        return;
    }
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
    alert("Amigo sorteado: " + sorteado);
}


