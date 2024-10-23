//Dates

let myDate = new Date()

// console.log(typeof myDate);  //Object

// console.log(myDate); //Return a date object Eg: (2024-08-02T17:59:03.996Z)

// console.log(myDate.toString()); //Return Date object in String Format Eg: (Fri Aug 02 2024 18:07:43 GMT+0000 (Coordinated Universal Time))

// console.log(myDate.toDateString());

// console.log(myDate.toLocaleString());

// console.log(myDate.toISOString());

// console.log(myDate.toJSON());

// console.log(myDate.toLocaleDateString());

// console.log(myDate.toLocaleTimeString());

// console.log(myDate.toTimeString());


// let myCreateDate = new Date(2023, 0, 23)
// console.log(myCreateDate);
// console.log(myCreateDate.toString());
// console.log(myCreateDate.toDateString()); //Return Date 


// let myCreateDate = new Date(2023, 0, 23, 5, 3)
// console.log(myCreateDate.toLocaleString());   //Return Date with Time


let myCreateDate = new Date("2023-01-14")
// console.log(myCreateDate.toLocaleString()); //Return Date in (YYYY-MM-DD) format

// let myCreateDate = new Date("01-14-2023")
// console.log(myCreateDate.toLocaleString()); //Return Date in (MM-DD-YYYY) format


// let myTimeStamp = new Date()
/*          OR               both are same thing*/
let myTimeStamp = Date.now()
// console.log(Date.now());

// console.log(myTimeStamp); //Return value in miliseconds from (1 Jan 1970 to till given date) 

// console.log(myCreateDate.getTime()); //Return value from (1 Jan 1970 to myCreatedDate variable date) in miliseconds


/* IMP. Note: Always we have to do comparisions in miliseconds*/

// To convert into Seconds 

// console.log(Date.now()/1000); //But we have a problem here, that's Value return in Decimal Value like (1722673495.405), so prevent from decimal value we do one more thing in next step/line.

// console.log(Math.floor(Date.now()/1000)); //we get value in seconds Eg: 1722748244 


let newDate = new Date()
// console.log(newDate);

// console.log(newDate.getDate()); //Return Current Date

console.log(newDate.getTime()); // Return Value in Miliseconds from ( 1 Jan 1970 to Current Time Eg: 1722936890087 )

console.log(newDate.getMinutes());

// console.log(newDate.getMonth() +1); //Return Current month, and we use ( +1 ) because month counting start from ( 0 ) so, to prevent confusion we use ( +1 ) to arrange the month counting in real order

// console.log(newDate.getFullYear()); //Return current Year

// console.log(newDate.getDay()); //Return current Day (Eg: 2)

// console.log(newDate.getHours()); // it will return the left hours from the current time (Eg: Current Time 3:00 PM and 9 hours left to 12:00 so, it will Return Value ( 9 ))



//String Interpolation
// `${newDate.getFullYear()} and the time is ${newDate.getTime()}`

//Very Important Date Method
newDate.toLocaleString('default', {
    weekday: "Long",             //we can define as many property

})