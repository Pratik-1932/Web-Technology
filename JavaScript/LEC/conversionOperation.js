let score="22";
let scorebool=true;
let scorenull=null;//empty or zero
let scoreundef=undefined;//decleared but can't initialized



// console.log(typeof(score));
// console.log(typeof(scorebool));
// console.log(typeof(scorenull));
// console.log(typeof(scoreundef));

// //type convertion
// let p ="02abc";
// let pconverts=Number(p);
// //IMP:if there is non numeric number inside string it will throws NaN;
// console.log(typeof(p));
// console.log(pconverts)//if in the string there is number it will converts but there is not a number in the string then it will gives NaN;
// console.log(typeof(pconverts));

// let pconvertsString=String(pconverts);

// console.log(typeof(pconvertsString));


//-----------------------------------------Activity No:01-----------------------------------------

//Activity No:1--all convertions
let str="123";

//1. string to number
let strNumber = Number(str);
console.log(`type of strNumber :${typeof (strNumber)}`);
console.log(strNumber);

//2.str to boolean & boolean to number 
let strboolean = Boolean(str);
let strboolNumber=Number(strboolean);
console.log(strboolNumber);
console.log(`type of strboolean :${typeof (strboolean)}`);
console.log(strboolean);



let strnull = null;
console.log(`type of strnull :${typeof (strnull)}`);
console.log(strnull);

//3.Null
console.log(Number(null)); //0
console.log(String(null)); //"null"
console.log(Boolean(null)); //false

//4.undefined
console.log(Number(undefined)); //NaN
console.log(String(undefined)); //"undefined"
console.log(Boolean(undefined)); //false

//5.bigInt
console.log(Number(10n)); // 10
console.log(String(10n)); //"10"
console.log(Boolean(10n)); //true






//-----------------------------------------Operations-------------------------------------


// 

//Arithmatic operations
console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2/2);
console.log(2%2);

let str1="hello";
let str2=" pratik";
console.log(str1+str2);
//Notes :Js only autoamtically converts string to number in arithmatic operations;
console.log("1"+2);
console.log("1"+2+2);
console.log(1+"2");
console.log(1+3+"2");
console.log("5"-2); //force to numeric convertion
console.log((3+4)*5%3);