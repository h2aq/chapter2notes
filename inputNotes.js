const readline = require('readline-sync');

// let choice = readline.question("Do you want to hear a joke? y/n: ");
// if (choice == "y"){
//     console.log("Heres a joke.");
// }
// -----------------
// let num = Number(readline.question("Enter a number please. : "));
// if (num % 2 == 0){
//     console.log("It's divisible by 2");
// } else {
//     console.log("Not divisible by 2");
// }
// if (num % 3 == 0){
//     console.log("It's divisible by 3");
// } else {
//     console.log("Not divisible by 3");
// }
// if (num % 4 == 0){
//     console.log("It's divisible by 4");
// } else {
//     console.log("Not divisible by 4");
// }
// if (num % 5 == 0){
//     console.log("It's divisible by 5");
// } else {
//     console.log("Not divisible by 5");
// }
// if (num % 6 == 0){
//     console.log("It's divisible by 6");
// } else {
//     console.log("Not divisible by 6");
// }
//--------------

// let guess = Number(readline.question("Enter a number please: "));
// if (guess == 16){
//     console.log("you win!!! YAYYYYY")
// } else if (guess > 16){
//     console.log("booo its too big");
// } else if (guess < 16){
//     console.log("too small.");
// }

// --------------
// let  cost = Number(readline.question("Enter cost: "))
// if (cost <= 0){
//     console.log("invalid");
// } else {
//     let tax = cost * .08;
//     let newTotal = cost + tax;
//     console.log(`Your new total is $${newTotal.toFixed(2)}`);
// }
//-----------------
let mealCost  = Number(readline.question("Please enter cost: "));
if (mealCost <= 0){
    console.log("invalid");
} else {
    let service = Number(readline.question("How was the service you've been provided? (Good/Average/Horrible) : "))
    let tip = 0;
    if (service == "Great"){
        tip = mealCost * .20
    } else if (service == "Average"){
        tip = mealCost * .15;
    } else if (service == "Horrible"){
        tip = mealCost * .05;
    }
    let totalBill = mealCost + tip;
    console.log(`The total bill should be $${totalBill.toFixed(2)}`);
}
