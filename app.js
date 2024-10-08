// Selecciona los elementos del DOM.
const inputRojo = document.getElementById('rojo');
const inputVerde = document.getElementById('verde');
const inputAzul = document.getElementById('azul');

const textoRojo = document.getElementById('texto-rojo');
const textoVerde = document.getElementById('texto-verde');
const textoAzul = document.getElementById('texto-azul');

// Función para actualizar el color de fondo de la página.
function actualizarColor(rojo, verde, azul) {
  document.body.style.backgroundColor = `rgb(${rojo}, ${verde}, ${azul})`;
}

// Función para actualizar los valores y el color.
function actualizarValoresYColor(input, texto) {
  const nuevoValor = input.value;
  texto.textContent = nuevoValor; 
  return nuevoValor; 
}

// Agrega un event listener para el input de Rojo.
inputRojo.addEventListener('input', (e) => {
  const rojo = actualizarValoresYColor(inputRojo, textoRojo);
  const verde = inputVerde.value;
  const azul = inputAzul.value;
  actualizarColor(rojo, verde, azul);
});

// Agrega un event listener para el input de Verde.
inputVerde.addEventListener('input', (e) => {
  const rojo = inputRojo.value;
  const verde = actualizarValoresYColor(inputVerde, textoVerde);
  const azul = inputAzul.value;
  actualizarColor(rojo, verde, azul);
});

// Agrega un event listener para el input de Azul.
inputAzul.addEventListener('input', (e) => {
  const rojo = inputRojo.value;
  const verde = inputVerde.value;
  const azul = actualizarValoresYColor(inputAzul, textoAzul);
  actualizarColor(rojo, verde, azul);
});
