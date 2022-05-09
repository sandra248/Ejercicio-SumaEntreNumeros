let numero1Usuario: number = Number(prompt("Ingrese un numero"));
let numero2Usuario: number = Number(prompt("Ingrese un numero"));
let resultado: number = 0;

if (numero1Usuario < numero2Usuario) {
  for (let i = numero1Usuario; i <= numero2Usuario; i++) {
    resultado += i;
  }
} else {
  for (let i = numero2Usuario; i <= numero1Usuario; i++) {
    resultado += i;
  }
}

console.log("La suma de los numeros ingresados es de:", resultado);
