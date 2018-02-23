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
let persona = new Persona ('Hugo Trigoso Paredes', 32);
persona.setEdad(45);
console.log(persona);
//Devuelve = Persona {nombres: "Hugo Trigoso Paredes", edad: 32}