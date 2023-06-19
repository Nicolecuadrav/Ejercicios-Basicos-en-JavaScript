//Diseña una función llamada sumaLista() capaz de sumar todos los números que forman el 
//array que se le pase como argumento.
//ejemplo : Si ejecuto sumaLista([2,4,5,1,2]) deberá devolver como resultado 14

function sumaLista (lista)
{
    let suma = 0;
      
    for (let i = 0; i < lista.length; i++) {
          suma += lista[i];
        }
      
    return suma;
}

let numeros = [9, 4, 2, 1, 8];
let resultado = sumaLista(numeros);
console.log(resultado); 

      



