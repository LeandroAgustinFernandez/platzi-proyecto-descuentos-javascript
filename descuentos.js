const precioProducto = 100;
const descuento = 15;
const cuponesValidos = ["MAR10", "MARZ25", "MARZO50"];
function calcularPrecioConDescuento(precio, descuento) {
  let porcentajePrecioConDescuento = 100 - descuento;
  let precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
  return precioConDescuento;
}
function calcularPrecioConCupon(precio, cupon) {
  switch (cupon) {
    case "MAR10":
      return calcularPrecioConDescuento(precio, 10);
      break;
    case "MARZ25":
      return calcularPrecioConDescuento(precio, 25);
      break;
    case "MARZO50":
      return calcularPrecioConDescuento(precio, 50);
      break;
    default:
      break;
  }
}
console.log({
  precioProducto,
  descuento,
  precioFinal: calcularPrecioConDescuento(precioProducto, descuento),
});

function calcularPrecioFinal() {
  let precio = document.getElementById("precio").value;
  let descuento = document.getElementById("descuento").value;
  let cuponIngresado = document.getElementById("cupon").value;
  let cuponValido = cuponesValidos.some((cupon) => cupon == cuponIngresado);
  let preciofinal =
    cuponValido == true
      ? calcularPrecioConCupon(precio, cuponIngresado)
      : calcularPrecioConDescuento(precio, descuento);
  let formaDeDescuento =
    cuponValido == true
      ? `aplicando el cupon ${cuponIngresado}`
      : `con descuento del ${descuento}%`;
  document.getElementById(
    "precioFinal"
  ).innerHTML = `El precio final del producto es $${preciofinal} ${formaDeDescuento}`;
}
