
const contenedorProductos = document.querySelector("#contenedorProductos");
const botonesCategoria = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector(".titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector(".iterador-carrito")

//function: TRAIGO PRODUCTOS Al Dom
const productos = [];

function traerProductos(){
    fetch("./Js/productos.json")
        .then(response => response.json())
        .then((data) =>{
            data.forEach((producto => {
                productos.push(producto);
            })
        )}
        )}
traerProductos();

    

function cargarProductos(productosElegidos){

    contenedorProductos.innerHTML = ``; //de esta forma hago que la propiedad append añada los productos por la categoria elegida sin que se posicionen abajo de los que ya estaban
    productosElegidos.forEach(producto => {
    
        const div = document.createElement("div");
        div.classList.add(`card`);
        div.classList.add(`col-sm-12`);
        div.classList.add(`col-md-6`);
        div.classList.add(`col-lg-4`);
        div.classList.add(`col-xl-4`);
        div.innerHTML = `
            <img src="${producto.imagen}" class="card-img-top rounded mx-auto d-block"  alt="${producto.imagen}">
            <div class="card-body">
                <h5 class="card-title">${producto.titulo}</h5>
                <p class="producto-precio">$${producto.precio}</p>
                <button id="${producto.id}" class="btn producto-agregar btn-light">Agregar a carrito</button>
            </div>
        `;
        contenedorProductos.append(div);
    
    })
    actualizarBotonesAgregar();

    }
    cargarProductos(productos);
    
    
// cargarProductos(productos);

//botones del menu: aplicar un efecto active a cada boton y aplicar un filter
botonesCategoria.forEach(boton => {
    boton.addEventListener("click", (e) => {
        // botonesCategoria.forEach(boton => boton.classList.remove("active"));
        // e.currentTarget.classList.add("active");
        
        if(e.currentTarget.id != "todos"){
        const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
        tituloPrincipal.innerText = productoCategoria.categoria.nombre;

        const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
        cargarProductos(productosBoton)
        }else{
            tituloPrincipal.innerText = "Nuestros productos"
            cargarProductos(productos);
        }
    })
});


// actualizamos botones en cada nuevo objeto que creamos 


function actualizarBotonesAgregar(){
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}
let productosEnCarrito;
let productosEnCarritoLs = localStorage.getItem("productos-en-carrito");


if(productosEnCarritoLs){
    productosEnCarrito = JSON.parse(productosEnCarritoLs);
    actualizarNumerito();
}else{
    productosEnCarrito = []
}

function agregarAlCarrito(e){
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton); 

    if(productosEnCarrito.some(producto => producto.id === idBoton)){
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    
    }else{
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }
    actualizarNumerito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
    
    console.log(productosEnCarrito);
}

function actualizarNumerito(){
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}
