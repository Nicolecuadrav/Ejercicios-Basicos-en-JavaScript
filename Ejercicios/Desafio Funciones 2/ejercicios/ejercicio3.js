//Crear una función con el nombre de funcionArray() que tome dos arreglos de números enteros como
// parámetro y retornar un único arreglo, cada elemento del arreglo debe estar multiplicado
//por dos. ej: [2,5,2][1,5,3] -> [4,10,4,2,10,6].

function funcionArray(array1,array2)
{
    let unionArreglos =array1.concat(array2)
    
    let arrayMultiplicado= unionArreglos.map(num => num * 2)
    console.log(arrayMultiplicado);
}

let a = [2,4,6];
let b = [3,5,8];

funcionArray(a,b);
