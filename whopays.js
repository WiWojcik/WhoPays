function whoIsPaying (names) {
var numberOfPeople = names.length;
var randomPersonPosition = Math.floor(Math.random() * numberOfPeople );
var payingPerson = names[randomPersonPosition];
return payingPerson;
}
console.log(whoIsPaying(["harsh", "mayank", "darsh", "raj"]));
