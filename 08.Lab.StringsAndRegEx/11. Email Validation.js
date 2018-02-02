function emailVal(email) {

    let regex = /^[a-zA-Z0-9]+@[a-z]+(\.[a-z]+)+$/g;

    return regex.test(email) ? 'Valid' : 'Invalid';
}
function validateEmail(email) {
    let pattern = /^[a-zA-Z0-9]+@[a-z]+(\.[a-z]+)+$/g;
    let result = pattern.test(email); 
    if (result) {
    console.log("Valid");} else {
    console.log("Invalid");
    }
}