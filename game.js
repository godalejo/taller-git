const numeroSecreto = Math.floor(Math.random() * 100) + 1;
let intentoAnterior = null;
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
    const diferencia = Math.abs(numeroSecreto - intento);
    
    if (intentoAnterior === null) {
      alert(diferencia > 20 ? "Frio" : "Caliente");
    } else {
      const difAnterior = Math.abs(numeroSecreto - intentoAnterior);
      alert(diferencia < difAnterior ? "Mas caliente" : "Mas frio");
    }
    intentoAnterior = intento;
  }
}