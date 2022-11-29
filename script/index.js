const productos = [];

class Producto {
    constructor() {
        this.id = productos.length + 1;
        this.name = prompt("Ingresa un nombre");
        this.price = parseFloat(prompt("Ingresa un precio"));
        this.quantity = parseInt(prompt("Ingrese cantidad"));
        this.url = prompt("Ingrese url"); 
    }
}


const opciones = prompt("Ingrese: \n 1) Para agregar productos \n 2) Para mostrarlos \n 0) Para salir")

const agregarProducto = () => {
    const newProducto = new Producto();
    productos.push(newProducto);
    console.log(productos);
}
const mostrarProductos = () => {
    console.log("Sus productos son:");
    productos.forEach((producto,index) => {
        console.log(index +1, producto);
    })
}


const menu = (opcion) => {
    switch (opcion) {
        case "1":
            agregarProducto();
            break
        case "2":
            mostrarProductos();
            break
        
        default:
            alert ("Ingrese una opción correcta (entre 0, 1 ó 2).");
            break
    }
    prompt("Ingrese: \n 1) Para agregar productos \n 2) Para mostrarlos \n 0) Para salir")
}

while (opciones !== "0") {
    menu(opciones);
}