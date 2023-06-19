//Deberás crear un array para guardar los nombres de los meses del año , empezando por 0 para enero .
//Para comprobar el funcionamiento pide al usuario un número entre 0 y 11 y devuelve el nombre del mes del año .
// Se supone que el dato tecleado estará entre 0 y 11

function entregaMes()
{
    let meses = ["enero", "febrero", "marzo", "abril",
    "mayo", "junio", "julio", "agosto", "septiembre",
     "octubre", "noviembre", "diciembre"];
   
   let numeroMes = parseInt(prompt("Ingresa un número entre 0 y 11:"));
   let nombreMes = meses[numeroMes]; 
   console.log("El mes correspondiente al número ingresado es: " + nombreMes);
  
}

entregaMes();

