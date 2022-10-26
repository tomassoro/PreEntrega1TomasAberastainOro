function Saludo(){
    let hola = String(prompt("Bienvenidos a PolyBristol. Ingrese su nombre de usuario"));
    alert("Bienvenido " + hola); 
    console.log("Bienvenido " + hola);
}
Saludo();

let macetas = 500;
let lamparas = 800;
let fundas = 1100; 

function SumaCarrito(resultado){
    let cantArtic = Number(prompt("Ingrese cuantos articulos de este tipo desea sumar al carrito"));
    if(cantArtic <= 10){
        let resultado = cantArtic * 1;
        return resultado
    }else{
        alert("La cantidad supera el stock")
    }
}
/*
const semana = { lunes: 0, martes: 1, miercoles: 2, jueves:3, viernes:4};
*/
for(let i=0;i<4;i++){
    let montos=Number(prompt("Ingresa los montos recaudados de lunes a viernes"))
    alert(montos);
}

let opcion = Number(prompt("Seleccione el articulo que desee: 1 Macetas 2 Lamparas 3 Fundas para celular")); 
switch(opcion){
    case 1:
        console.log("Las macetas tienen un costo de $" + macetas);
        alert("Las macetas tienen un costo de $" + macetas);
        alert("El total es: " + SumaCarrito() * macetas);
        break
    case 2:
        console.log("Las macetas tienen un costo de $" + lamparas);
        alert("Las macetas tienen un costo de $" + lamparas);   
        alert("El total es: " + SumaCarrito() * lamparas);
        break
    case 3:
        console.log("Las macetas tienen un costo de $" + fundas);
        alert("Las macetas tienen un costo de $" + fundas);
        alert("El total es: " + SumaCarrito() * fundas);
        break;
    default:
        console.log("No ingresaste una opcion valida")
        alert("No ingresaste una opcion valida")
        break
}
Ventaxsemana();

