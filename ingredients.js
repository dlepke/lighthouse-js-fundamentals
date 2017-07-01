var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

var indexCounter = 0;
while (indexCounter < ingredients.length) {
  console.log(ingredients[indexCounter]);
  indexCounter++;
}

for (var index = 0; index < ingredients.length; index++) {
  console.log(ingredients[index]);
}

for (var index = ingredients.length - 1; index >= 0; index--) {
  console.log(ingredients[index]);
}