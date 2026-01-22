//1.var :it has function scope & hoisting is done,it can redeclear and also reassigned
//2.let : it has block scope if you print without initializing it will goes in TDZ,it can't redecleared but it can reinitialized
//3.const:it has also block scope & it can't be redeclerd & reinitialized


//Q1.display info. of students using variables

let firstName ="pratik";
console.log(`typeOfname : ${(firstName)}`);
console.log(`Name : ${firstName}`);
document.writeln(firstName);


let age=20;
console.log(`typeOf age : ${typeof(age)}`);
console.log(`Age : ${age}`);
document.writeln(age);


const marks={
    phy:90,
    chem:100,
    math:100
};
console.log(`typeOf marks : ${typeof(marks)}`);
console.log("Marks:");
console.log(marks)
document.writeln("Phy:",marks.phy);
document.writeln("chem:",marks.chem);
document.writeln("math:",marks.math);

//Q2.Even/Odd checker

let number=prompt("Enter the number");
//M1-using division operator
function evenoddM1(num){
    console.log("M1-using division operator");
  if(num%2==0){
    console.log("Even Number");
   }
  else{
    console.log("Odd Number");
  }
}
evenoddM1(number);
//M2-using bitwise operator
function evenoddM2(num){
    console.log("M2-using bitwise operator");
    if(num & 1)  console.log("Odd Number");  //num & 1 gives 0 or 1
    else{
         console.log("Even Number");
    }
}
evenoddM2(number);

//M3:using divide operator
function evenoddM3(num){
    console.log("M3-using divide operator");
  if((num/2)*2 ==num){
    console.log("Even Number");
   }
  else{
    console.log("Odd Number");
  }
}
evenoddM3(number);

//Q3.student pass/fail -if marks>=35 pass otherwise fail

let mark=prompt("Enter the marks to check pass or fail");
if(mark>=35) console.log("pass");
else console.log("fail");

//Q4.print Numbers using loop
let snum=prompt("Enter the start number");
let lnum=prompt("Enter the last number");

for(let i=snum;i<=lnum;i++){
    console.log(i);
}

//Q5.
let x=10;
let y=x;
console.log(x,y);

x=100;
console.log(x,y);
