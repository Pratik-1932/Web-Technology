//const: it cant be reinitialized & redecleared 
const accno=2001;
// accno=1002;
console.log(accno);


//let:it has block scope and it cant be reinitialized within the same block
//var:it has global scope and it can be redecleared and reinitialized
// let a=10;
// var b=20;

// {
//     let a=100;
//     var b=200;
//     console.log(`inside block ${a} ${b}`);
// }

// console.log(a,b);


//Vaiable Decleration

let user_accno=10;
console.log(`type of user_accno : ${typeof(user_accno)}`);
console.log(`value of user_accno : ${user_accno}`);

let user_name="pratik";
console.log(`type of name : ${typeof(user_name)}`);
console.log(`value of user_name : ${user_name}`);

let isActive=true;
console.log(`type of isActive : ${typeof(isActive)}`);
console.log(`value of isActive : ${isActive}`);
 
let balance=202000n;
console.log(`type of balance : ${typeof(balance)}`);
console.log(`value of balance : ${balance}`);

let empty;
console.log(`type of empty : ${typeof(empty)}`);
console.log(`value of empty : ${empty}`);

let n=null;
console.log(`type of n : ${typeof(n)}`);
console.log(`value of n : ${n}`);



let id ="2";
let sym=Symbol(id);
console.log(`type of sym : ${typeof(sym)}`);
console.log(sym);


