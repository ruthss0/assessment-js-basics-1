const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log('Welcome to the password validator tool');
reader.question("What is a password you would like to validate? ", (input) => {
    if(input.length >= 10){
        console.log("Success: password is greater than 10") 
    } else {
        console.log("failure: Password should be 10 or more characters")
    }
    // This line closes the connection to the command line interface.
    reader.close()
});