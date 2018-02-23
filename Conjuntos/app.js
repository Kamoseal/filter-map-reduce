
let lenguajes = new Set ();

lenguajes.add('php');
lenguajes.add('java');
lenguajes.add('c#').add('go');

console.log(lenguajes);
//Devuelve Set (4) un array de 3 length "php", "java", "c#", "go"; length : 3;

console.log(lenguajes.has('php'));
//Devuelve es true

console.log(lenguajes.size);
//Devuelve 4 = a length 4
console.log(lenguajes.delete('php'));
//Devuelve true (valor borrado/eliminado)
lenguajes.forEach(
    (lenguaje) => console.log(lenguaje)
);
//Recorre el bloque y devuelve java, c#, go como strings NO ARREGLOS. 