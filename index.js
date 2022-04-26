const TOTAL = (precio, cantidad) => precio * cantidad;

let precioNotebookEstandar = 100000;

let precioNotebookGamer = 200000;

let Notebook = parseFloat(prompt(`Elija la caja que quiere comprar:
    1. Notebook Estandar = ${precioNotebookEstandar} $
    2. Notebook Gamer = ${precioNotebookGamer} $`));

while (Notebook !== 1 && Notebook !== 2) {
    alert("Por favor elija una opción válida. Para Notebook Estandar ingrese '1' y para Notebook Gamer ingrese '2'");
    Notebook = parseFloat(prompt(`Elija la Notebook que quiere comprar:
    1. Notebook Estandar = ${precioNotebookEstandar} $
    2. Notebook Gamer = ${precioNotebookGamer} $`));
}  

let cantidad = parseInt(prompt("Ingrese la cantidad de Notebooks que desea comprar"));

while ((isNaN(cantidad)) || (cantidad % 1 !== 0)) {
    alert("Por favor ingrese una cantidad válida");
    cantidad = parseInt(prompt("Ingrese la cantidad de Notebooks que desea comprar"));
}

if (Notebook === 1) {
    let total = TOTAL(precioNotebookEstandar, cantidad);
    alert(`El total a pagar es de ${total}`);
} 

else if (caja === 2) {
    let total = TOTAL(precioNotebookGamer, cantidad);
    alert(`El total a pagar es de ${total}`);
}