const POKEMON = {
    nombre: "Pikachu",
    color: "amarillo",
    evolucion: "Raichu"
};

var description = "Mi nombre es "+POKEMON.nombre+" y soy de color "+POKEMON.color+" mi evolucion es "+POKEMON.evolucion;

console.log(description);
// Devuelve Mi nombre es Pikachu y soy de color amarillo mi evolucion es Raichu

let descriptionLet =`Mi nombre es ${POKEMON.nombre} y soy de color ${POKEMON.color} mi evolucion es ${POKEMON.evolucion}`;
//Ingresa dentro de la constante POKEMON y su propiedad para arrojar el valor.

console.log(descriptionLet);
//Devuelve Mi nombre es Pikachu y soy de color amarillo mi evolucion es Raichu