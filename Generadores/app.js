//`<>
function* MiGenerador (){
    var index = 0;
    while(index<3){
        yield index++;
        //yield se utiliza para pausar y reanudar una función  generadora (function* o una función generadora heredada).
    }
}

let gen = MiGenerador();

//console.log(gen.next());
//Devuelve un Object done : false, value : 0;
//console.log(gen.next());
//Devuelve un Object done : false, value : 1;
//console.log(gen.next());
//Devuelve un Object done : false, value : 2;

console.log(gen.next().value);
//Devuelve 0
console.log(gen.next().value);
//Devuelve 1
console.log(gen.next().value);
//Devuelve 2