const validateName = (name) => {
    if (name !== null && name !== undefined && name.length > 0) {
        console.log('The Name,', name, 'is Valid!');
        return true;
    }
    console.log('The Name,', name, 'is Invalid!');
    return false;
}
const validateEmail = (email) => {

    var regularExpression = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (email !== null && email !== undefined && email.length > 0) {
        if (regularExpression.test(email)) {
            console.log('The Email', email, 'is Valid!');
            return true;
        }
        console.log('The Email', email,'is Invalid!');
        return false;
    }
    console.log('The Email', email,' is Invalid!');
    return false;
}

const validatePassword = (password) => {
    var length = 6;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;

    var strength = {
        validation1: false,
        validation2: false,
        validation3: false,
    }

    if (password !== null && password !== undefined && password.length > 0) {

        if (password.length > length) {
            strength.validation1 = true;
        } else {
            strength.validation1 = false;
        }

        if (upperCaseLetters.test(password)) {
            strength.validation2 = true;
        } else {
            strength.validation2 = false;
        }

        if (numbers.test(password)) {
            strength.validation3 = true;
        } else {
            strength.validation3 = false;
        }

        if (strength.validation1 && strength.validation2 && strength.validation3) {
            console.log("Password is Valid and Strength!");
            return true;
        }
        if (!strength.validation1 && strength.validation2 && strength.validation3) {
            console.log("Password is Valid but is a medium pass!");
            return false;
        }
        if (strength.validation1 && !strength.validation2 && strength.validation3) {
            console.log("Password is Valid but is a medium pass!");
            return false;
        }
        if (strength.validation1 && strength.validation2 && !strength.validation3) {
            console.log("Password is Valid but is a medium pass!");
            return false;
        }
        if (!strength.validation1 && !strength.validation2 && strength.validation3) {
            console.log("Password is Valid but is a weak pass!");
            return false;
        }
        if (!strength.validation1 && strength.validation2 && !strength.validation3) {
            console.log("Password is Valid but is a weak pass!");
            return false;
        }
        if (strength.validation1 && !strength.validation2 && !strength.validation3) {
            console.log("Password is Valid but is a weak pass!");
            return false;
        }
        if (!strength.validation1 && !strength.validation2 && !strength.validation3) {
            console.log("Password is Valid but is a weak pass!");
            return false;
        }
        console.log("Password is Invalid!");
        return false;
    }
    console.log("Password is Invalid!");
    return false;
}



const validatePasswordConfirm = (pass, confirmPassword) => {
    if (pass === confirmPassword.value) {
        console.log("The passwords are equals!");
        return true;
    }
    console.log("The passwords are not equals!");
    return false;
}

module.exports = {
    validateName,
    validateEmail,
    validatePassword,
    validatePasswordConfirm,

}