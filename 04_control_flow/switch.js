// Syntax Of Switch

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }


const month = 3

switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;                      //If we do not use "break" keyword then, it will execute all the statements after the condition matches except default statement.
    case 4:
        console.log("April");
        break;
                
    default:
        console.log("Default Case Match");
        break;
}

//***********************************************************************

const months = "feb"

switch (months) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("February");
        break;
    case "march":
        console.log("March");
        break;                      //If we do not use "break" keyword then, it will execute all the statements after the condition matches except default statement.
    case "april":
        console.log("April");
        break;
                
    default:
        console.log("Default Case Match");
        break;
}