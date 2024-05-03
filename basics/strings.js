let name = "arka"
let surname = "mandal"

console.log(typeof name);
console.log(`Hello, my name is ${name} and my surname is ${surname}`);

const myname = new String('arka');

console.log(typeof myname);
console.log(myname[1]);
console.log(myname.__proto__);

console.log(myname.charAt(2));
console.log(myname.indexOf("a"));

let newString = myname.substring(0,4)
console.log(newString);

let otherStr = myname.slice(-8,2)
console.log(otherStr);

const str = "      arka      "
console.log(str);
console.log(str.trim);

const url = "https://www.javatpoint.com/oprweb/test.jsp?filename=how-to-change-background-color-in-html1"

console.log(url.replace('?', '-'));

