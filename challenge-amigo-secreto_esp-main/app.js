// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();
    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }
    if (amigos.includes(nombre)) {
        alert("Este nombre ya ha sido añadido.");
        return;
    }
    amigos.push(nombre);
    actualizarLista();
    input.value = "";
}

function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        const botonEliminar = document.createElement("button");
        botonEliminar.textContent = "X";
        botonEliminar.onclick = () => eliminarAmigo(index);
        li.appendChild(botonEliminar);
        lista.appendChild(li);
    });
}

function eliminarAmigo(index) {
    amigos.splice(index, 1);
    actualizarLista();
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Debe haber al menos dos participantes para realizar el sorteo.");
        return;
    }
    let amigosSorteo = [...amigos];
    let resultado = {};
    amigos.forEach((amigo) => {
        let posibles = amigosSorteo.filter(a => a !== amigo);
        if (posibles.length === 0) {
            sortearAmigo();
            return;
        }
        let elegido = posibles[Math.floor(Math.random() * posibles.length)];
        resultado[amigo] = elegido;
        amigosSorteo = amigosSorteo.filter(a => a !== elegido);
    });
    mostrarResultado(resultado);
}

function mostrarResultado(resultado) {
    const listaResultado = document.getElementById("resultado");
    listaResultado.innerHTML = "";
    for (let [amigo, secreto] of Object.entries(resultado)) {
        const li = document.createElement("li");
        li.textContent = `${amigo} → ${secreto}`;
        listaResultado.appendChild(li);
    }
}
