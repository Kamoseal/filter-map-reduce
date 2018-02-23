const cursos = ["java", "c#", "php", "go"];
//`<>
let resultado = cursos.find(curso=>curso=="java");
//Se nombra un bloque llamado resultado, que itera en cursos y busca la funcion curso que retorne == a java
console.log(resultado)
//Devuelve java