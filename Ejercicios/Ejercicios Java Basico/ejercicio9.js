// 9. Escribe un programa que pida una frase y escriba cuantas veces aparece la letra a(pantalla)
let frase = prompt("Ingresa una frase:");
let letra = prompt("Ingresa la letra a buscar:");


let contador = 0;

for (var i = 0; i < frase.length; i++) {
    if (frase.charAt(i) === letra) {
        contador++;
      }
    }
    contador
   { console.log("La letra " + letra + " aparece " + contador + " veces en la frase.")};
