//Crear una función sumaArreglo() que tome como parámetro un arreglo de números, 
//retornar la longitud del arreglo + la suma de todos los números del arreglo.

function sumaArreglo(arreglo) {
    let longitud = arreglo.length;
    let suma = 0;
    
    for (let i = 0; i < longitud; i++) {
      suma += arreglo[i];
    }
    
    return longitud + suma;
  }
  
  let numeros = [3, 5, 4, 2, 9];
  console.log(sumaArreglo(numeros));  
  
  let otrosNumeros = [5, 10, 15];
  console.log(sumaArreglo(otrosNumeros));  
  
