// primitive : call by value 

// 7 types : string , number , boolean, null, undefined, symbol, BigInt

const id = Symbol('123')
const anotherid = Symbol('123')

console.log(id == anotherid);

// reference (non-primitive)

// array, objects, functions

const arr = [1 ,2 ,3]
let obj = {
    myName : "Arka",
    age : 21,
}

let myfunc = function(){
console.log("hello");
}

// *********stack(primitive) heap(non-primitive)********

let name = "arka"
let stack1 = name 

stack1 = "ishika"

console.log(name);
console.log(stack1);


let userOne = {
    email : "hi@gmail.com",
}

let usertwo = userOne

usertwo.email = "bye@gmail.com"
console.log(userOne.email);
console.log(usertwo.email);