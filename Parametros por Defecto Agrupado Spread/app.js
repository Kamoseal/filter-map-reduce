//Parametro por Defecto
function calcular (total = 1000, igv = 0.18){
    console.log(total, igv)
    //Devuelve 1000, 0.18
}

calcular(5000);
//Devuelve 5000, 0.18;

//Parametro por Agrupado
function mostrarCursos (...cursos){
    console.log (cursos)
}

mostrarCursos('c#','go','java',2000);
//Devuelve un arreglo de 4 elementos

//Parametro por Spread
function comprarCurso(nombre,precio,cantidad){
    console.log(nombre,precio,cantidad)
}
// Devuelve java 150 2 
var curso = ['java', 150.00, 2];
//variable con parametros en arreglo
comprarCurso(...curso)
//Se nombra la funcion con la variable como parametro, donde se encuentra en array la informacion. 
