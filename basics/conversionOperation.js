let score = "50"

console.log(typeof score);

let value_in_number = Number(score)
console.log(value_in_number);
console.log(typeof value_in_number);

let bool_value = true
let is = 1
console.log(typeof bool_value);
console.log(typeof is);

value_in_number = Number(bool_value)
bool_in_number = Boolean(is)

console.log(value_in_number)
console.log(bool_in_number)

/* 1 --> true; 0--> false
""--> false
any value / "any value" --> true
*/

let num = 69
let str_convert = String(num)

console.log(typeof str_convert);

console.log("Arka loves" + " " + str_convert + " "+ "and it is" + " " + bool_in_number)


//  ***************operations***********

let value = 3
let negvalue = -value
console.log(negvalue);