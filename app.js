let amigos = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }
    
    if (amigos.includes(nombre)) {
        alert("Este nombre ya está en la lista.");
        return;
    }

    amigos.push(nombre);
    input.value = "";
    mostrarLista();
}

function mostrarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        li.classList.add("name-item");
        
        const botonEliminar = document.createElement("button");
        botonEliminar.textContent = "X";
        botonEliminar.classList.add("delete-button");
        botonEliminar.onclick = () => eliminarAmigo(index);
        
        li.appendChild(botonEliminar);
        lista.appendChild(li);
    });
}

function eliminarAmigo(index) {
    amigos.splice(index, 1);
    mostrarLista();
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    document.getElementById("resultado").innerHTML = `<li class="result-item">El amigo secreto es: <strong>${amigoSorteado}</strong></li>`;
}