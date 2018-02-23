class Persona {
    constructor (nombres, edad){
        this.nombres = nombres;
        this.edad = edad;
        
    }
    getNombres(){
        return this.nombres;
    //Define getNombre function, retorna nombres (this.nombres) de la function constructor.   
    }
    getEdad(){
        return this.edad;
     //Define getEdad function, retorna nombres (this.edad) de la function constructor.      
    }
    setNombres(nombres){
        this.nombres = nombres;
     //setNombre function con parametro de nombres, Definiendo this.nombres de la function constructor = a nombres;    
    }
    setEdad(edad){
        this.edad = edad;
    //setEdad function con parametro de edad, Definiendo this.nombres de la function constructor = a edad;     
    }
}

class Profesor extends Persona{
    constructor(nombres, edad, codigo){
        super(nombres,edad);
        this.codigo =codigo;
    }
}

let profesor = new Profesor("Karla Serna", 28, 54715);
console.log(profesor)
//Devuelve Profesor Codigo: 54715, edad : 28, nombres: "Karla Serna"