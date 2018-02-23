var animals = [
  {name: 'Fluffykins', species: 'rabbit'},
  {name: 'Caro', species: 'dog'},
  {name: 'Hamilton', species: 'dog'},
  {name: 'Harold', species: 'fish'},
  {name: 'Ursula', species: 'dog'},
  {name: 'Caro', species: 'cat'},
  {name: 'Jimmy', species: 'fish'}
]

var names = []
for (var i = 0; i < animals.length; i++){
  //recorre el arreglo de objetos uno a uno
  names.push(animals[i].name)
  //agrega a la variable names un array de name que se encuentra dendro de animals[i]
}
  //console.log(names); Devuelve un arreglo de los nombres que fueron enviados a la variable names
  //(7) ["Fluffykins", "Caro", "Hamilton", "Harold", "Ursula", "Caro", "Jimmy"]
var namesMap = animals.map(function(animal){
  //Se ingresa al array animals y se le da la funcion de map, dentro de ella se encuentra la funcion animal
  return animal.name;
  //la funcion animal retorna name de animals
})
console.log(namesMap);
//Devuelve un arreglo de los nombres que fueron enviados a la variable names
//(7) ["Fluffykins", "Caro", "Hamilton", "Harold", "Ursula", "Caro", "Jimmy"]
var namesEcmaScripSix = animals.map((animal)=> animal.name)
console.log(namesEcmaScripSix);
