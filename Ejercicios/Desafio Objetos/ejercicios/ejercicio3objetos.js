// 3. Define un objeto, que tenga dos propiedades: precio y descuento y un método neto. 
// El método calculará el precio con el descuento aplicado. Mostrar por consola

var producto1 = {
    precio: 10000,
    descuento: 30,
}
  

var descuentoAplicable= (producto1.precio) * 0.3;
var precioConDescuento = (producto1.precio - descuentoAplicable);

  console.log("Precio con descuento: " + precioConDescuento);
  