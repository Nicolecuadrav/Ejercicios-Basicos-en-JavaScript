// 6. Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.(consola)

let numero1= parseInt (prompt("Escriba el primer número"));
let numero2= parseInt(prompt("Escriba el segundo número"));

if (numero1 > numero2) {
    console.log("El primer numero ingresado es " +  numero1 + " y es mayor.")
}
else if (numero2> numero1){
    console.log("El segundo numero ingresado es " +  numero2 + " y es mayor")
}