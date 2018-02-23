console.log(Number.isNaN(50));
//Devuelve false
console.log(Number.isNaN(0/0));
//Devuelve TRUE Not a Number

console.log(Number.isFinite(123));
//Devuelve TRUE es de tipo finito

console.log(Number.isInteger(50));
//Evalua si el tipo de valor es entero
//Devuelve TRUE ya que es un numero entero
console.log(Number.isInteger("50"));
//Devuelve false ya que es un string no un numero
console.log(Number.EPSILON);
//Nos devuelve directamente el valor

console.log(Math.trunc(3.1416));
//Trunca valores, quita los decimales y se queda con los enteros

console.log(Math.sign(7));
//Evalua si el numero es positivo 
//Devuelve 1
console.log(Math.sign(-7));
//Devuelve -1 indicando que el numero es negativo