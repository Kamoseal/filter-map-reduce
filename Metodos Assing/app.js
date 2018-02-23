const cuentas = {cliente: "Karla Serna"};
const alimentos = {nombre: "ceviche", cantidad:2};
const bebidas = {tipo: "soda", sabor:"naranja"};

Object.assign(cuentas, alimentos, bebidas);

console.log(cuentas);
//Devuelve un objeto con cliente : "Karla Serna", nombre: "Ceviche", sabor : "Naranja", tipo : "soda";

console.log(cuentas.nombre);
//Devuelve ceviche

console.log (cuentas.cliente);
//Devuelve Karla Serna