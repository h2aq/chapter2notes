// Unary operators use one value
console.log(typeof 15);
console.log(typeof "this string");
console.log(typeof true);
console.log(typeof false);

// Binary operators use two values
// Comparison Operators
console.log(10>5); //greater than
console.log(10<5) // less than
console.log(10>=5); // greater than or equal to
console.log(10<=5); //less than or equal to
console.log(10==5); // are they both equal? false
console.log(10 == 10); // are they both equal? true
console.log(10 != 5); // are they different? true
console.log(10 != 10); // are they different? false
// Logical operators
// AND && shift-7  true when both are true
console.log(3>2 && 1>5); //true and false = false
console.log(3>2 && 1<5); // true and true = true
console.log(3<2 && 1<5); // false and true = false
console.log(3<2 && 1>5); // false and false = false
// OR || shift-\ (next to enter key)
// true when at least one was true
console.log(3>2 || 1>5); //true or false = true
console.log(3>2 || 1<5); // true or true = true
console.log(3<2 || 1<5); // false or true = true
console.log(3<2 || 1>5); // false or false = false
// NOT ! flips true to false and false to true
console.log(!true);
console.log(!false);

// Ternary operators use three values
console.log(true ? 1 : 2);
console.log(false ? 1 : 2);
console.log(3>2 ? "yes it is true" : "no, it is not true");
console.log(3<2 ? "yes it is true" : "no, not true");

// Order of Operations
// Everything else ( happens first)
//Comparison operators
// AND
// OR (happens last)
console.log(1 + 1 == 3 && 10 * 12 > 100);
// 2 == 3 && 120 > 100
// false and true
// false
console.log(1+1 == 3)&&(10 * 12 > 100);
console.log((1+1) == 3) && ((10*12) > 100);

//
console.log(typeof 15);
console.log(typeof "this");
console.log(typeof "that");
console.log(typeof "that");
console.log(typeof true);
console.log(typeof false);
console.log(typeof "TRUE");

//
console.log(7 == 7);
console.log(7 != 7);
console.log(7 == 10);
console.log(7 != 10);
console.log(15 > 10);
console.log(21 > 30);
console.log(15 > 15);
//pt2
console.log("next");
//
console.log(15 >= 15);
console.log(15 <= 15);
console.log(15 < 15);
console.log(15 < 20);
console.log(21 <= 50);
console.log(23 <= 10);
//displayed
console.log("displayed");
//
console.log(1 > 0 && 10 <= 100);
console.log(1 > 0 && 10 >= 100);
console.log(1 < 0 && 10 == 100);
//row2displayed
console.log("next row displayed");
//
console.log(1 > 0 || 10 <= 100);
console.log(1 > 0 || 10 >= 100);
console.log(1 < 0 || 10 == 100);
//
console.log("displayed pt 2");
//
console.log(1 < 5 ? "a" : "b");
console.log(1 > 5 ? "yes" : "no");
console.log(1 > 5 ? 1 : 20);
console.log(21 != 20 ? "you win" : "you lose");
//
console.log(1+1 == 2 && 10 * 10 > 50);






