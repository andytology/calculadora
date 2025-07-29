// Obtener los valores de los inputs
function getValores() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  return [num1, num2];
}

// Mostrar el resultado
function mostrarResultado(resultado) {
  document.getElementById("resultado").textContent = `Resultado: ${resultado}`;
}

// Operaciones
function sumar() {
  const [a, b] = getValores();
  mostrarResultado(a + b);
}

function restar() {
  const [a, b] = getValores();
  mostrarResultado(a - b);
}

function multiplicar() {
  const [a, b] = getValores();
  mostrarResultado(a * b);
}

function dividir() {
  const [a, b] = getValores();
  if (b === 0) {
    mostrarResultado("No se puede dividir por cero");
  } else {
    mostrarResultado(a / b);
  }
}
