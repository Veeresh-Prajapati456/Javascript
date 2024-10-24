//Dates

let myDate = new Date()

// console.log(typeof myDate);  //Object

// console.log(myDate); //Return a date object Eg: (2024-08-02T17:59:03.996Z)

// console.log(myDate.toString()); //Return a string representation of a Date Eg: (Fri Aug 24 2024 18:07:43 GMT+0000 (Coordinated Universal Time))

// console.log(myDate.toDateString()); //Returns a date as a string value. Eg: (Thu Oct 24 2024)

// console.log(myDate.toLocaleString()); // Converts a date and time to a string by using the current or specified locale. Eg: (10/24/2024, 2:54:00 PM)

// console.log(myDate.toLocaleDateString()); //Converts a date to a string by using the current or specified locale. Eg: (10/24/2024)

// console.log(myDate.toISOString()); //Returns a date as a string value in ISO format. Eg: (2024-10-24T14:54:00.809Z)

// console.log(myDate.toJSON()); // returns a string representation of that Date in the JavaScript date time string format or same as ISO format ( toISOString() ).Eg: (2024-10-24T14:54:00.809Z)

// console.log(myDate.toTimeString()); //Returns a time as a string value. Eg: (18:15:56 GMT+0000 (Coordinated Universal Time))

// console.log(myDate.toLocaleTimeString()); //Converts a time to a string by using the current or specified locale. Eg: (6:15:56 PM)



// let myCreateDate = new Date(2023, 0, 23)
// console.log(myCreateDate); //Return a date object. Output: (2023-01-23T00:00:00.000Z)
// console.log(myCreateDate.toString()); //Return a string representation of a Date.  Output: (Mon Jan 23 2023 00:00:00 GMT+0000 (Coordinated Universal Time))
// console.log(myCreateDate.toDateString()); //Return a Date as a string value.  Output: (Mon Jan 23 2023) 


// let myCreateDate = new Date(2023, 0, 23, 5, 3)
// console.log(myCreateDate.toLocaleString());   //Return Date and Time to a string.  Output: (1/23/2023, 5:03:00 AM)


// let myCreateDate = new Date("2023-01-14")
// console.log(myCreateDate.toLocaleString()); //Return Date in (YYYY-MM-DD) format

// let myCreateDate = new Date("01-14-2023")
// console.log(myCreateDate.toLocaleString()); //Return Date in (MM-DD-YYYY) format


// let myTimeStamp = new Date()
/*          OR               both are same thing*/
let myTimeStamp = Date.now()
// console.log(Date.now());  //Return Date in miliseconds. Eg: (1729795407544)  calculate date from (1 jan 1970 to current date)

// console.log(myTimeStamp); //Return value in miliseconds from (1 Jan 1970 to till given date) 

// console.log(myCreateDate.getTime()); //Return value from (1 Jan 1970 to myCreatedDate variable date) in miliseconds


/* IMP. Note: Always we have to do comparisions in miliseconds*/

// To convert into Seconds 

// console.log(Date.now()/1000); //But we have a problem here, that's Value return in Decimal Value like (1722673495.405), so prevent from decimal value we do one more thing in next step/line.

// console.log(Math.floor(Date.now()/1000)); //we get value in seconds Eg: 1722748244 


let newDate = new Date()
// console.log(newDate);

// console.log(newDate.getDate()); //Return Current Date

// console.log(newDate.getTime()); // Return Value in Miliseconds from ( 1 Jan 1970 to Current Time Eg: 1722936890087 )

// console.log(newDate.getMinutes());

// console.log(newDate.getMonth() +1); //Return Current month, and we use ( +1 ) because month counting start from ( 0 ) so, to prevent confusion we use ( +1 ) to arrange the month counting in real order

// console.log(newDate.getFullYear()); //Return current Year

// console.log(newDate.getDay()); //Return current Day (Eg: 2)

// console.log(newDate.getHours()); // it will return the left hours from the current time (Eg: Current Time 3:00 PM and 9 hours left to 12:00 so, it will Return Value ( 9 ))



//String Interpolation
// `${newDate.getFullYear()} and the time is ${newDate.getTime()}`

//Very Important Date Method
// newDate.toLocaleString('default', {
//     weekday: "Long",             //we can define as many property

// })