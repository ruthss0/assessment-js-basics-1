const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log('Welcome to the password validator tool');
reader.question("What is a password you would like to validate? ", (input) => {
    if(input.length >= 10){
        console.log("Success: Password is greater than 10") 
    } else {
        console.log("Failure: Password should be 10 or more characters")
    }

    if(/\d/.test(input)) {
        console.log("Success: Password contains a number")
    } else {
        console.log("Failure: Password doesn't contain a number")
    }

    if(/[A-Z]/.test(input)) {
        console.log("Success: Password contains a capitalized letter")
    } else {
        console.log("Failure: Password doesn't contain a capitalized letter")
    }

    if(/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(input)) {
        console.log("Success: Password contains a special character")
    } else {
        console.log("Failure: Password doesn't contain a special character")
    }
    
    // This line closes the connection to 
    reader.close()
});