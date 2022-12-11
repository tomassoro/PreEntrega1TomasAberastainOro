const productosEnCarrito = 
JSON.parse(localStorage.getItem("productos-en-carrito"))

const carritoVacio = document.querySelector("#carrito-vacio");
const contenedorCarritoProductos = document.querySelector("#carrito-productos");
const CarritoProducto = document.querySelector("#carrito-producto");
const carritoAcciones = document.querySelector("#carrito-acciones");
const carritoComprado = document.querySelector("#carrito-comprado");
const totalCompra = document.querySelector("#total-compra");

if(productosEnCarrito){
    carritoVacio.classList.add("disabled")
    contenedorCarritoProductos.classList.remove("disabled");
    carritoAcciones.classList.remove("disabled");
    totalCompra.classList.remove("disabled");

    contenedorCarritoProductos.innerHTML = ""
    productosEnCarrito.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("carrito-producto");
        div.classList.add("d-flex");
        div.innerHTML = `
                <img class="img-fluid img-thumbnail carrito-producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
                <div class="carrito-producto-titulo">
                    <small>Titulo</small>
                    <h3>${producto.titulo}</h3>
                </div>
                <div class="carrito-producto-cantidad">
                    <small>Cantidad</small>
                    <h3>${producto.cantidad}</h3>
                </div>
                <div class="carrito-producto-subtotal">
                    <small>Subtotal</small>
                    <h3>${producto.precio * producto.cantidad}</h3>
                </div>
                <button class="btn btn-danger carrito-producto-eliminar" id="${producto.id}"><i class="bi bi-trash"></i> </button>`
                contenedorCarritoProductos.append(div)
    });
}else{
    carritoVacio.classList.remove("disabled")
    contenedorCarritoProductos.classList.add("disabled");
    carritoAcciones.classList.add("disabled");
    totalCompra.classList.add("disabled");
}