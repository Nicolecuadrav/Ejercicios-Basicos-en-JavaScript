//7. Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.(consola)

let numero_1 = parseInt(prompt("Escriba el primer número"));
let numero_2 = parseInt(prompt("Escriba el segundo número"));
let numero_3 = parseInt(prompt("Escriba el tercer número"));

let mayor= numero_1;

if (numero_2> mayor && numero_3){
    console.log("El numero mayor es " + numero_2)
}
if (numero_3> mayor && numero_2){
    console.log("El numero mayor es " +  numero_3)
}
else if (mayor> numero_2 && numero_3){
    console.log("El numero mayor es "+ mayor)
}

