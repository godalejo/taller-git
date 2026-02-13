const numeroSecreto = Math.floor(Math.random() * 100) + 1;
let adivinaste = false;

alert("Adivina el numero del 1 al 100");

while (!adivinaste) {
  const entrada = prompt("Cual crees que es?");
  const intento = parseInt(entrada);

  if (isNaN(intento) || intento < 1 || intento > 100) {
    alert("Numero no valido");
    continue;
  }

  if (intento === numeroSecreto) {
    alert("Lo lograste");
    adivinaste = true;
  } else {
    // Logica de frio o caliente
    const diferencia = Math.abs(numeroSecreto - intento);
    if (diferencia > 20) {
      alert("Frio");
    } else {
      alert("Caliente");
    }
  }
}