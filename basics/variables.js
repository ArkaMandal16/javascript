const account_id = 1
let account_email = "mandalarka16@gmail.com"
var account_password = "123345"

console.log(account_id);

console.table([account_id, account_email, account_password])

/*
var not good to use because of function scope
*/
let account_state;
console.table([account_id, account_email, account_password, account_state])
