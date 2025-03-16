// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    // Obtener el valor del campo de entrada
    const inputAmigo = document.getElementById('amigo');
    const nombre = inputAmigo.value.trim();

    // Validar que el campo no esté vacío
    if (nombre === '') {
        alert('Por favor, inserte un nombre.');
        return;
    }

    // Validar si el nombre ya existe (ignorando mayúsculas/minúsculas)
    if (amigos.some(amigo => amigo.toLowerCase() === nombre.toLowerCase())) {
        alert('Este nombre ya está en la lista. Por favor, ingrese otro nombre.');
        return;
    }

    // Agregar el nombre al array
    amigos.push(nombre);

    // Limpiar el campo de entrada
    inputAmigo.value = '';

    // Actualizar la lista visual
    actualizarListaAmigos();
}

// Función para actualizar la lista visual de amigos
function actualizarListaAmigos() {
    // Obtener el elemento de la lista
    const lista = document.getElementById('listaAmigos');
    
    // Limpiar la lista existente
    lista.innerHTML = '';

    // Agregar cada amigo como un elemento de lista
    for (let amigo of amigos) {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    }
}

// Función para sortear un amigo aleatorio
function sortearAmigo() {
    // Validar que haya amigos en la lista
    if (amigos.length === 0) {
        alert('Por favor, agregue al menos un amigo antes de sortear.');
        return;
    }

    // Obtener un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    
    // Obtener el amigo sorteado
    const amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>¡${amigoSorteado} ha sido sorteado!</li>`;
}
