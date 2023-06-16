// 2.Crear un objeto que se usa para guardar información sobre las calificaciones de un alumno. 
// El curso contiene tres materias: Inglés, programación y HTM, y el objeto contendrá el nombre del alumno y 
// la calificación en cada una de ellas.
// El script imprimirá el nombre y la media(promedio) de sus calificaciones.



var alumno = {
    nombre: "Felipe",
    ingles: 70,
    programacion: 65,
    html: 65,
  };
  
  
  var promedio = (alumno.ingles + alumno.programacion + alumno.html) / 3;
  

  console.log("Nombre del alumno: " + alumno.nombre);
  console.log("Promedio de calificaciones: " + promedio);
  