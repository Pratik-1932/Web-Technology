// String interpolation : this is good way to print
let str="JS";
console.log(`Hello  my course name ${str}`);

const gameCount=new String("Game is on");


//1.lengh:gives length of the string
console.log(gameCount.length);

//2.Accessing using yhe array index
console.log(gameCount[0]);

//3.convert into uppercase
console.log(gameCount.toUpperCase());
//4.convert into lowercase
console.log(gameCount.toLowerCase());

//5.access the character using index of string
console.log(gameCount.charAt(1));

//6.access the index of charcter or string checks 1st occurance
console.log(gameCount.indexOf("is"));

//7.slice:returns a part of original string as a new string

console.log(gameCount.slice(1,4)); //ame 

//8.replace: serches the value in the string and returns a string with the replaced value

console.log(gameCount.replace("is","are"));

//9.repeat: return a string with the number of copies of string
console.log(gameCount.repeat(3)); //prints 3 times game is on

//10.includes : returns true if the value in the string otherwise false
console.log(gameCount.includes("is"));

//11.substring : give a part of an string

console.log(gameCount.substring(2)); //only start index
console.log(gameCount.substring(2,4)); //start and end index ,the end index is exclusive

//12.startswith: check the string start with the value or not
console.log(gameCount.startsWith("G")); //it have exact letter  or string 
console.log(gameCount.startsWith("on")); //false
console.log(gameCount.startsWith("game")); //false
console.log(gameCount.startsWith("Game is on ")) //true

//13.endswith
console.log(gameCount.endsWith("G")); //false
console.log(gameCount.endsWith("is on"));
console.log(gameCount.endsWith("")); //true  //because after the last character there is nothing






