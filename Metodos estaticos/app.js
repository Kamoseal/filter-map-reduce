class Operaciones{
    static sumar (x,y){
        return x+y;
    }
    static resta(x,y){
        return x-y;
    }
}

console.log(Operaciones.sumar(10,20));
//Devuelve 30

console.log(Operaciones.resta(50,20));
//Devuelve 30

//Ya no hay necesidad de hacer la instancia : let op =new Operaciones(); Ya que con  static se puede acceder al metodo o a la funcion. 