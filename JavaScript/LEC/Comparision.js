// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2<=1);
// console.log(2==1);
// console.log(2!=1);

//null converts 0 only when there is comparision like <,>,<=,>= but not in the equality 
console.log("2">1); //true
console.log("02">1);//o/p is unpredictable don't use this //true
console.log(null>0);//false
console.log(null == 0); //false
console.log(null>=0);//true
console.log(null==null);//true
console.log(null==undefined);//true


console.log(undefined==0);
console.log(undefined>0);
console.log(undefined<0);
console.log("2"===2);