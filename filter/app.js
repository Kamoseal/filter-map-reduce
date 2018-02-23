var animals = [
  {name: 'Fluffykins', species: 'rabbit'},
  {name: 'Caro', species: 'dog'},
  {name: 'Hamilton', species: 'dog'},
  {name: 'Harold', species: 'fish'},
  {name: 'Ursula', species: 'dog'},
  {name: 'Caro', species: 'cat'},
  {name: 'Jimmy', species: 'fish'}
]

var dogs = []
for (var i = 0; i < animals.length; i++) {
  //console.log(animals[i]);
  //Recorre objeto por objeto
  if (animals[i].species === 'dog')
  //Busca el string 'dog' dentro de los objetos recorridos
  dogs.push(animals[i])
  //Agrega a los true encontrados delif anterior a la variable dogs
};
console.log(dogs)
//Devuelve (3) [{…}, {…}, {…}] 0 : {name: "Caro", species: "dog"} 1 : {name: "Hamilton", species: "dog"} 2 : {name: "Ursula", species: "dog"}] length : 3


var dogsfilterPartOne = function (animal){
  return animal.species === 'dog'
  //Crea una funcion llamada animal que retorne en animal species que sean iguales a 'dog'
}
var dogsfilterPartTwo = animals.filter(dogsfilterPartOne)
//Crea un filrado del array animals que esos datos los ocupara dogsfilterPartOne
console.log(dogsfilterPartTwo);
//Devuelve (3) [{…}, {…}, {…}] 0 : {name: "Caro", species: "dog"} 1 : {name: "Hamilton", species: "dog"} 2 : {name: "Ursula", species: "dog"}] length : 3

var dogsfilter = animals.filter(function(animal){
  return animal.species === 'dog'
})
console.log(dogsfilter);
//Devuelve (3) [{…}, {…}, {…}] 0 : {name: "Caro", species: "dog"} 1 : {name: "Hamilton", species: "dog"} 2 : {name: "Ursula", species: "dog"}] length : 3
