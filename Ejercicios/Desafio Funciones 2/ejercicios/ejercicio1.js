// Crear una función multiplicarArreglo() que tome como parámetro un arreglo de números,
// retornar la multiplicación del número menor del arreglo y el número mayor del arreglo.

function multiplicarArreglo(arreglo)
{
  let menorValor= Math.min(...arreglo);  
  let mayorValor= Math.max(...arreglo);
  let resultado= menorValor * mayorValor;


    console.log(resultado);
    return resultado;

}

let array = [3,5,8,2,9,20,4];

multiplicarArreglo(array);