//2. Let amigos = ["pedro","maria","joan","pili"]; 	 	
 //1- queremos que escriba "mis amigos son maria y joan.” 
 //con el siguiente array , haz que muestre la frase por consola.

 let amigos = ["pedro", "maria", "joan", "pili"];

let indexMaria = amigos.indexOf("maria");
let indexJoan = amigos.indexOf("joan");

if (indexMaria !== -1 && indexJoan !== -1) {
  let amigosSeleccionados = amigos.slice(indexMaria, indexJoan + 1);
  let frase = "Mis amigos son " + amigosSeleccionados.join(" y ") + ".";
  console.log(frase);
}

 