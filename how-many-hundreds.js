function howManyHundreds(num) {
  var number = num
  if (number % 100 !== 0) {
    number = number - (number % 100)
  }
  return number / 100
}

console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);