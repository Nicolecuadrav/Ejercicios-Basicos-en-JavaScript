//Crear una función con el nombre de booleanoArray() que tome dos arreglos de números como
//parámetro y que retorne un booleano, unir los dos arreglos en uno solo, si la longitud del 
//nuevo arreglo es mayor o igual a 10 que retorne true si es menor a 10 que retorne false.

function booleanoArray(array1,array2)
{
  let unionArrays= array1.concat(array2);
  let longitudArray= unionArrays.length;


    if (longitudArray >= 10)
    { 
        console.log(true) 
        return (true);

    }else
    {
        console.log(false)
        return(false);
    }
    
}

 let  x = [4,6,1,4,6];
 let  z = [3,2,12,5,7];

booleanoArray( x,z);
