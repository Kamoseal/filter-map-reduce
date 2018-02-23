const TAMANIO = 1000;
//Constantes no se modifican sus valores
const IGV = 0.18;

//console.log(TAMANIO); 
//Devuelve 1000
//alert(IGV);
//Devuelve 0.18

function EjemploVar(){
    var x = 100;
    //Variable universal X
    if (true){
        var x = 50;
        //Variable x = 100 cambia a 50, ya que se renombra.
        console.log (x); //50
    }
    console.log (x);//50
}

function EjemploLet(){
    let x = 100;
    //Se declara una let (Bloque) x = 100 
    if (true){
        let x = 50;
        //Se declara una let (Bloque) x = 50 no se modifica let x = 100 
        console.log(x);//50
    }
    console.log(x); //100
}
 console.log("========VAR========")
 EjemploVar();
//50
//50
 console.log("========let========")
 EjemploLet();
 //50
 //100