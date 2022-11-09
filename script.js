
function Saludo(){
        let hola = String(prompt("Bienvenidos a PolyBristol. Ingrese su nombre de usuario"));
    alert("Bienvenido " + hola); 
    console.log("Bienvenido " + hola);
}
Saludo();


class Productos{
    constructor(nombre, precio, reciclaje){
        this.nombre = nombre;
        this.precio = precio;
        this.reciclaje = reciclaje;
    }
};
// Fundas para celulares 
const fundaSamsung = new Productos("funda Samsung A37", 2500, "2000 tapitas");
const fundaMotorola = new Productos("funda Motorola Edge30", 2500, "2050 tapitas");
const fundaIphone = new Productos("funda Iphone 14", 3500, "2100 tapitas")

const fundas= [{fundaSamsung},{fundaMotorola},{fundaIphone}];

// Lamparas
const lampara01 = new Productos("lampara de escritorio", 2500, "2000 tapitas");
const lampara02 = new Productos("lampara velador super", 3500, "3000 tapitas");
const lampara03 = new Productos("lampara velador max", 4500, "4100 tapitas")

const lamparas= [{lampara01},{lampara02},{lampara03}];

// lapices
let lapices = [];
lapices.push("Lapiz negro 8mm");
lapices.push("Lapiz negro 6mm");

console.log(lapices);


//Macetas

const maceta01 = new Productos("Maceta nº8", 700, "400 tapitas");
const maceta02 = new Productos("Maceta nº12", 1300, "1000 tapitas");
const maceta03 = new Productos("Maceta nº16", 1800, "2000 tapitas")

const macetas= [{maceta01},{maceta02},{maceta03}];

//ARRAY DE PRODUCTOS
const arrayproductos = [{lamparas},{fundas},{macetas}];

let mostrararray = arrayproductos.forEach((funda) => {console.log(funda)});

mostrararray



// //Buscador Inicio
const productos = [
    { nombre : "macetas", precio : 500, reciclaje : "200 tapitas de polietileno"},
    { nombre : "espejos", precio: 1000, reciclaje : "600 tapitas de polietileno"},
    { nombre : "veladores", precio: 1000, reciclaje : "1000 tapitas de polietileno"}
];
let productoElegido = prompt("Ingrese el producto que desee")
const producto1 = productos.find((producto) => producto.nombre === productoElegido);  
console.log(producto1);

//Buscador por Rango 

// function SumaRango(min,max){
//     let total = 0;

//     for(let i = min; i <= max ; i++) { 
//         total+=i;
//     }

//     return total;
// }
