function agregarTarea() {
  const tareaInput = document.getElementById("tareaInput");
  const nuevaTarea = tareaInput.value;
  
  if (nuevaTarea !== "") {
    const listaTareas = document.getElementById("listaTareas");
    const nuevaTareaElemento = document.createElement("li");
    nuevaTareaElemento.textContent = nuevaTarea;
    listaTareas.appendChild(nuevaTareaElemento);
    
    tareaInput.value = ""; // Limpiamos el campo de texto después de agregar la tarea
  } else {
    mostrarAdvertencia("El campo de tarea está vacío. Por favor, ingrese una tarea.");
  }
}

function borrarTareas() {
  const listaTareas = document.getElementById("listaTareas");
  while (listaTareas.firstChild) {
    listaTareas.removeChild(listaTareas.firstChild);
  }
}

function mostrarAdvertencia(mensaje) {
  const advertencia = document.createElement("div");
  advertencia.classList.add("advertencia");
  advertencia.textContent = mensaje;
  
  const container = document.querySelector(".container");
  container.appendChild(advertencia);
  
  setTimeout(function() {
    advertencia.remove();
  }, 3000);
}
