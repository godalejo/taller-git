// Numero al azar y bienvenida
const numeroSecreto = Math.floor(Math.random() * 100) + 1;
let adivinaste = false;

alert("Adivina el numero del 1 al 100");

while (!adivinaste) {
  const entrada = prompt("Cual crees que es?");
  const intento = parseInt(entrada);

  if (intento === numeroSecreto) {
    alert("Lo lograste");
    adivinaste = true;
  } else {
    alert("Cerca pero no, sigue intentando");
  }
}