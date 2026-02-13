const numeroSecreto = Math.floor(Math.random() * 100) + 1;
let adivinaste = false;

alert("Adivina el numero del 1 al 100");

while (!adivinaste) {
  const entrada = prompt("Cual crees que es?");
  const intento = parseInt(entrada);

  // Validacion simple
  if (isNaN(intento) || intento < 1 || intento > 100) {
    alert("Eso no es un numero valido");
    continue;
  }

  if (intento === numeroSecreto) {
    alert("Lo lograste");
    adivinaste = true;
  } else {
    alert("Sigue intentando");
  }
}