var orders = [
  {amount: 250 },
  {amount: 400 },
  {amount: 100 },
  {amount: 325 }
]

var totalAmount = 0;
for (var i = 0; i < orders.length; i++) {
  totalAmount += orders[i].amount
  console.log(totalAmount);
  //Devuelve (250 + 650 +750) // 1075
}

var totalAmountReduce = orders.reduce(function (sum, order){
  //el arreglo orders se reduce a la suma de su order
  return sum + order.amount;
  //suma mas el objeto recorrido de amount
}, 0);
//Incrementalo al cero
console.log(totalAmountReduce);
//Devuelve 1075
