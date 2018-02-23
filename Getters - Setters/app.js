class Persona{
    constructor(nombres, edad){
        this.nombres = nombres;
        this.edad = edad;
    }

    getNombres(){
        return this.nombres;
    }
    getEdad(){
        return this.edad;
    }
    setNombres(nombres){
        this.nombres = nombres;
    }
    setEdad(edad){
        this.edad = edad;
    }
         
}
let persona = new Persona ("Karla Serna", 28);
console.log(persona);
// Devuelve Nombres "Karla Serna", edad: 28;
persona.setNombres("Paulina Martinez");
persona.setEdad(32);
console.log(persona.getNombres());
//Devuelve Paulina Martinez
console.log(persona.getEdad());
//Devuelve 32