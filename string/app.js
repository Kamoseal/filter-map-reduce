let mensaje = "¡Hola mundo!";

console.log(mensaje.repeat(3));
//Devuelve ¡Hola mundo!¡Hola mundo!¡Hola mundo!

console.log(mensaje.startsWith("ola",2));
//El index 2 comienza ola
//Devuelve true

console.log(mensaje.endsWith("ola",5));
//En el index 5 buscara hacia atras
//Devuelve true

console.log(mensaje.endsWith("ola",3));
//Devuelve falso

console.log(mensaje.includes("mundo"));
//Buscara si la palabra se encuentra incluido devolvera TRUE

console.log(mensaje.includes("mundo",6));
//Buscara si del index 6 hacia atras encuentra la palabra mundo
//Devuelve TRUE