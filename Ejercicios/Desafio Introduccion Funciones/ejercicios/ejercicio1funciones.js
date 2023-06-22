//Crea una función llamada numeroMayor() que toma tres números como entrada y 
//retornar el número mayor de ellos, si son iguales, devolver un String «Los números son iguales».

function numeroMayor(num1, num2, num3) {
    if (num1 === num2 && num2 === num3) {
      return "Los números son iguales";
    } else if (num1 >= num2 && num1 >= num3) {
      return num1;
    } else if (num2 >= num1 && num2 >= num3) {
      return num2;
    } else {
      return num3;
    }
  }
  
  let resultado = numeroMayor(5, 10, 7);
console.log(resultado);

resultado = numeroMayor(2, 2, 2);
console.log(resultado); 

