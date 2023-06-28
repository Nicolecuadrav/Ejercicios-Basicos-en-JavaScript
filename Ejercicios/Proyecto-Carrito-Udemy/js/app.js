//Variables:

const carrito= document.querySelector('#carrito');
const contenedorCarrito= document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn= document.querySelector('#vaciar-carrito');
const listaCursos= document.querySelector('#lista-cursos');
let articulosCarrito= [];    //Inicia como un arreglo vacío para ir agregando elementos al carrito

//Función para agregar los EventListeners 

cargarEventListeners();
function cargarEventListeners(){
    //Cuando agregas un curso presionando 'Agregar al Carrito'
    listaCursos.addEventListener('click', agregarCurso)

    //Elimina cursos del Carrito
    carrito.addEventListener('click', eliminarCurso);

    //Vaciar el Carrito de Compras
    vaciarCarritoBtn.addEventListener('click', () =>{
        articulosCarrito = []; //Reseteamos el arreglo
        limpiarHTML(); //Eliminamos todo el HTML
    })
}


//Funciones
function agregarCurso(e){
    e.preventDefault();       //Con preventDefault prevenimos que ejecute la acción y busque llegar al link que aún no existe
    if(e.target.classList.contains('agregar-carrito')) { //Estamos verificando si el elemento que el usuario precionó Es agregar carrito, de lo contrario se produce un EVENT BUBBLING
        const cursoSeleccionado= e.target.parentElement.parentElement;
            leerDatosCurso(cursoSeleccionado);
        }
   
}

//Elimina un curso del Carrito
function eliminarCurso(e) {
    console.log(e.target.classList);
    if(e.target.classList.contains('borrar-curso')){
        const cursoId= e.target.getAttribute('data-id');

        //Elimina del arreglo articulosCarrito por el data-id
        articulosCarrito = articulosCarrito.filter(cursoSeleccionado => cursoSeleccionado.id !==cursoId);
        carritoHTML(); //Iteramos sobre el carrito y mostramos su HTML
    }
}

//Leer los datos del Curso que agregamos al carrito a traves de una función
//Esta función Lee el contenido del HTML al que le dimos click y extrae la información del curso

function leerDatosCurso(cursoSeleccionado){
    //  console.log(cursoSeleccionado);

    //Crear un objeto con el contenido del curso actual
    const infoCurso= {
        imagen: cursoSeleccionado.querySelector('img').src,
        titulo: cursoSeleccionado.querySelector('h4').textContent,
        precio: cursoSeleccionado.querySelector('.precio span').textContent,
        id: cursoSeleccionado.querySelector('a').getAttribute('data-id'), //a es enlace
        cantidad: 1 //La primera vez que se da click al agregar el curso es por la cantidad de uno
    }

    //Revisa si un elemento ya existe en el carrito con .some

    const existe = articulosCarrito.some(cursoSeleccionado => cursoSeleccionado.id === infoCurso.id );
    if(existe) {
        //Actualizamos la cantidad 
        const cursos = articulosCarrito.map( cursoSeleccionado => {  //Para encontrar el duplicado
            if(cursoSeleccionado.id === infoCurso.id ) { // Si se encuentra un duplicado
                cursoSeleccionado.cantidad++;                      //Se aumenta la cantidad 
                return cursoSeleccionado;              //Retorna el objeto actualizado
            }else{
                return cursoSeleccionado;              //Retorna los objetos que no son los duplicados
            }
        } );
        articulosCarrito= [...cursos];
    }else{
        //Agregamos el curso al carrito
        articulosCarrito= [...articulosCarrito, infoCurso];
    }

    // //Agrega elementos al Arreglo del Carrito (al carrito de compras)
    // articulosCarrito= [...articulosCarrito, infoCurso]; //Tomamos primero la copia de lo que hay en el carrito
    console.log(articulosCarrito);

    carritoHTML();
}


//Muestra el carrito de Compras en el HTML
function carritoHTML(){       //generará el HTML basado en el carrito de compras

    //Limpiar el HTML para no tener duplicados
        limpiarHTML();

    //Recorre el carrito y genera HTML

    articulosCarrito.forEach( cursoSeleccionado=>{
        const { imagen, titulo, precio, cantidad, id} = cursoSeleccionado;
        const row= document.createElement('tr');    //se crea un tablerow que es lo que se requiere dentro de un Table Body
        row.innerHTML= `
            <td>
                <img src="${imagen}" width= "100">
            </td>
            <td> ${titulo} </td>
            <td> ${precio} </td>
            <td> ${cantidad} </td>
            <td>
                <a href="#" class="borrar-curso" data-id="${id}"> X </a>
            </td>
        `;

        //agrega el HTM del carrito en el tbody
        contenedorCarrito.appendChild(row);
    })

}
//Elimina los cursos del tbody
function limpiarHTML(){
    //Forma lenta de eliminar HTML
    // contenedorCarrito.innerHTML= '';

    //Forma más rapida
    while(contenedorCarrito.firstChild){    //Mientras exista un hijo va a seguir limpiando
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
}


