let mapa = new Map();

mapa.set('nombre', 'Pikachu');
mapa.set('color', 'Amarillo');
mapa.set('tipo','Electrico');


console.log(mapa);
//Envia a el bloque mapa un array de 3 objetos [
//0 : {"nombre" => "Pikachu"}, 1:{"color" => "Amarillo"}, 2:{"tipo" => "Electrico"} length : 3
console.log(mapa.get('nombre'));
//Devuelve Pickachu
console.log(mapa.has('color'));
//Devuelve true
console.log(mapa.delete('tipo'));
//Devuelve true 

console.log(mapa);
//Devuelve el bloque mapa 0:{"nombre" => "Pikachu"}, 1 : {"color" => "Amarillo"} length : 2;


