function PizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}
    
var Pizza1 = PizzaOven("deep dish", "traditional", "Mozarella", ["pepperoni", "sausage"]);
var Pizza2 = PizzaOven("hand Tossed", "marinara", ["Mozarella","feta"], ["mushrooms", "olives","onions"]);
var Pizza3 = PizzaOven("hand Tossed", "white sause", ["Mozarella"], ["sea food", "olives","onions"]);
var Pizza4 = PizzaOven("deep dish", "traditional", "Mozarella", ["oregano", "mushroom","green pepper"]);
// console.log(Pizza1);
var listPizza = [Pizza1,Pizza2,Pizza3,Pizza4]
function randomPizza(listPizza){
    var randValue=Math.random();
    randValue=randValue*3;
    randValue= Math.ceil(randValue);
    console.log(randValue);
    console.log(listPizza[randValue]);
}
randomPizza(listPizza);