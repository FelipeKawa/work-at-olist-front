const validations = require('./validations.js');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log(`
------------------------------------------
Create Account app! 
Version: 1.0.0.
Usage: The user will validate fileds here
------------------------------------------
`);

rl.question('-----Press Enter to Start the Test-----', (test) => {

    rl.question('Enter your FullName: ', (name) => {
        validations.validateName(name);
        console.log('------------------------------------------');
        
        rl.question('Enter your Email: ', (email) => {
            validations.validateEmail(email);
            console.log('------------------------------------------');

            rl.question('Enter your Password: ', (password) => {
                var pass = password;
                validations.validatePassword(password);
                console.log('------------------------------------------');
                rl.question('Repeat your Password: ', (passwordConfirm) =>
                 {
                    validations.validatePasswordConfirm(pass, passwordConfirm);
                    console.log('------------------------------------------');
                    rl.close();
                });
            });
        });
    });
});
