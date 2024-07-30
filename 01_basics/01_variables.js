const accountId = 144553
let accountEmail = "veeresh@gmail.com"
var accountPassword = "v4455"
let accountState;

city = "Punjab"  //we can also declare variable without using type of variable like const, let etc but this is the bad practice.

console.log(accountId);
console.log(city);


accountPassword = "kp456"
city = "Delhi"

/* To print Data in Tabular Form then, use console.table([varname1, varname2, varname3]) */
console.table([accountId, accountEmail, accountPassword, accountState, city])
 