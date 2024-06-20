// console.log(2>1); //true
// console.log(2==1); //false


// console.log("2" > 1);
// console.log("02" > 1);
// console.log("02" < 1);
console.log("03" <= true); //false
console.log(1 > false); //true
console.log(2 < false); //false
console.log(1 >= true); //true
console.log("" > true); //false
console.log("" > false); //false
console.log("" < true); // true
console.log("" < false); //false



// console.log(null > 0); //false
// console.log(null == 0); //false
// console.log(null >= 0); //true
// console.log(null <= 0); //true
// console.log(null < 0); //false

/* The reason is that an equality check == and comparisions > < >= <= work differently.
Comparisions convert null to a number, treating it as 0.
That's why line no. (12 and 13) null >= 0 , null <= 0 is true, and line no. (10, 11, and 14) null > 0, null == 0, and null < 0 is false  */






// console.log(undefined > 0); //false
// console.log(undefined == 0); //false
// console.log(undefined >= 0); //false
// console.log(undefined < 0); //false
// console.log(undefined <= 0); //false

// it will always return false output when we compare with (undefined)