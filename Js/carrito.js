let productosEnCarrito = 
localStorage.getItem("productos-en-carrito");

productosEnCarrito = JSON.parse(productosEnCarrito);

const carritoVacio = document.querySelector("#carrito-vacio");
const contenedorCarritoProductos = document.querySelector("#carrito-productos");
const CarritoProducto = document.querySelector("#carrito-producto");
const carritoAcciones = document.querySelector("#carrito-acciones");
const carritoComprado = document.querySelector("#carrito-comprado");
const totalCompra = document.querySelector("#total-compra");
let botonEliminar = document.querySelectorAll("carrito-producto-eliminar");
const vaciarCarrito = document.querySelector(".carrito-acciones-vaciar");


function cargarProductosCarrito() {
    if(productosEnCarrito && productosEnCarrito.length > 0){
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

    actualizarBotonesEliminar();
}
cargarProductosCarrito();


function actualizarBotonesEliminar(){
    botonEliminar = document.querySelectorAll(".carrito-producto-eliminar");

    botonEliminar.forEach(boton => {
        boton.addEventListener("click", eliminarDelCarrito);
    });
}
function eliminarDelCarrito (e){
    let idBoton = e.currentTarget.id;
    const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
    productosEnCarrito.splice(index, 1);
    cargarProductosCarrito();
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
    
}
vaciarCarrito.addEventListener("click", vaciarElCarrito);
function vaciarElCarrito (){
    productosEnCarrito.length = 0;
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
    cargarProductosCarrito()
}