//Crea una función llamada generar_caracteres() que tome como parámetro un número entero (n) 
//y un carácter, retornar el carácter multiplicado por n. Por ejemplo, generar_caracteres(5,x),
//debería retornar “String” «xxxxx».

function generar_caracteres(n, caracter) {
    let resultado = "";
    for (let i = 0; i < n; i++) {
      resultado += caracter;
    }
    return resultado;
  }
console.log(generar_caracteres(8, 'n'));  
console.log(generar_caracteres(5, '.'));  
console.log(generar_caracteres(10, '1'));  
