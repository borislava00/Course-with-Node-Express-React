let s_prim = "foo";
let s_obg = new String(s_prim);

console.log(typeof s_prim); //logs "string"
console.log(typeof s_obg); //logs "object"

let s1 = '2 + 2';
let s2 = new String('2 + 2');

console.log(eval(s1)); //returns the number 4
console.log(eval(s2)) // returns the stirng '2 + 2'
console.log(eval(s2.valueOf())) // returns the number 4