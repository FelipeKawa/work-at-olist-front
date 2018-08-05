(function () {
    'use strict';

    var app = {
        validation1: false,
        validation2: false,
        validation3: false,
        isValidName: false,
        isValidEmail: false,
        isValidPassword: false,
        isValidPasswordConfirm: false,
        fullname: document.getElementById("fullname"),
        email: document.getElementById("email"),
        password: document.getElementById("password"),
        passwordConfirm: document.getElementById("passwordConfirm"),
        button: document.getElementById("btnCreateAccount"),
        bar1: document.getElementById("bar1"),
        bar2: document.getElementById("bar2"),
        bar3: document.getElementById("bar3"),
        mark1: document.getElementById("mark1"),
        mark2: document.getElementById("mark2"),
        mark3: document.getElementById("mark3"),
        span: document.getElementById("spanButton")
    };

    function init() {
        app.button.disabled = true;
        app.fullname.value = null;
        app.email.value = null;
        app.password.value = null;
        app.passwordConfirm.value = null;
    }

    function nameValidation() {

        if (app.fullname.value !== null && app.fullname.value !== undefined && app.fullname.value.length > 0) {
            app.fullname.className = "controls valid";
            app.isValidName = true;
        } else {
            app.fullname.className = "controls invalid";
            app.isValidName = false;
        }
        formValidation();
    }

    function emailValidation() {

        var regularExpression = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (app.email.value !== null && app.email.value !== undefined && app.email.value.length > 0) {

            if (regularExpression.test(app.email.value)) {
                app.email.className = "controls valid";
                app.isValidEmail = true;
            } else {
                app.email.className = "controls invalid";
                app.isValidEmail = false;
            }

        } else {
            app.email.className = "controls invalid";
            app.isValidEmail = false;
        }
        formValidation();
    }

    function passwordValidation() {
        var length = 6;
        var upperCaseLetters = /[A-Z]/g;
        var numbers = /[0-9]/g;

        if (app.password.value !== null && app.password.value !== undefined && app.password.value.length > 0) {

            if (app.password.value.length > length) {
                app.validation1 = true;
                app.mark1.className = "mark-valid";
            } else {
                app.validation1 = false;
                app.mark1.className = "mark-invalid";
            }

            if (upperCaseLetters.test(app.password.value)) {
                app.validation2 = true;
                app.mark2.className = "mark-valid";
            } else {
                app.validation2 = false;
                app.mark2.className = "mark-invalid";
            }

            if (numbers.test(app.password.value)) {
                app.validation3 = true;
                app.mark3.className = "mark-valid";
            } else {
                app.validation3 = false;
                app.mark3.className = "mark-invalid";
            }

            if (app.mark1 && app.mark2 && app.mark3) {
                app.isValidPassword = true;
            } else {
                app.isValidPassword = false;
            }

        } else {
            app.bar1.className = 'strength-bars-empty';
            app.bar2.className = 'strength-bars-empty';
            app.bar3.className = 'strength-bars-empty';
            app.password.className = "controls invalid";
            return;
        }

        barClass();
        formValidation();
    }

    function barClass() {

        if (app.validation1 && app.validation2 && app.validation3) {

            app.bar1.className = 'strength-bars-strong';
            app.bar2.className = 'strength-bars-strong';
            app.bar3.className = 'strength-bars-strong';
            app.password.className = "controls valid";

        } else if (!app.validation1 && app.validation2 && app.validation3) {

            app.bar1.className = 'strength-bars-medium';
            app.bar2.className = 'strength-bars-medium';
            app.bar3.className = 'strength-bars-empty';
            app.password.className = "controls invalid";

        } else if (app.validation1 && !app.validation2 && app.validation3) {

            app.bar1.className = 'strength-bars-medium';
            app.bar2.className = 'strength-bars-medium';
            app.bar3.className = 'strength-bars-empty';
            app.password.className = "controls invalid";

        } else if (app.validation1 && app.validation2 && !app.validation3) {

            app.bar1.className = 'strength-bars-medium';
            app.bar2.className = 'strength-bars-medium';
            app.bar3.className = 'strength-bars-empty';
            app.password.className = "controls invalid";

        } else if (!app.validation1 && !app.validation2 && app.validation3) {

            app.bar1.className = 'strength-bars-weak';
            app.bar2.className = 'strength-bars-empty';
            app.bar3.className = 'strength-bars-empty';
            app.password.className = "controls invalid";

        } else if (!app.validation1 && app.validation2 && !app.validation3) {

            app.bar1.className = 'strength-bars-weak';
            app.bar2.className = 'strength-bars-empty';
            app.bar3.className = 'strength-bars-empty';
            app.password.className = "controls invalid";

        } else if (app.validation1 && !app.validation2 && !app.validation3) {

            app.bar1.className = 'strength-bars-weak';
            app.bar2.className = 'strength-bars-empty';
            app.bar3.className = 'strength-bars-empty';
            app.password.className = "controls invalid";

        } else if (!app.validation1 && !app.validation2 && !app.validation3) {

            app.bar1.className = 'strength-bars-weak';
            app.bar2.className = 'strength-bars-empty';
            app.bar3.className = 'strength-bars-empty';
            app.password.className = "controls invalid";
        }
    }

    function confirmPasswordValidation() {
        if (app.password.value === app.passwordConfirm.value) {
            app.passwordConfirm.className = "controls valid";
            app.isValidPasswordConfirm = true;
        } else {
            app.passwordConfirm.className = "controls invalid";
            app.isValidPasswordConfirm = false;
        }
        formValidation();
    }

    function formValidation() {
        if (app.isValidName && app.isValidEmail && app.isValidPassword && app.isValidPasswordConfirm) {
            app.button.disabled = false;
        } else {
            app.button.disabled = true;
        }
    };


    /*  ------------------ Events from Inputs And Button ------------------*/
    app.fullname.onchange = function () {
        nameValidation();
    };
    
    app.fullname.onkeyup = function () {
        nameValidation();
    };
    
    app.fullname.onfocus = function () {
        nameValidation();
    };
    
    app.fullname.onblur = function () {
        nameValidation();
    };
    
    app.email.onchange = function () {
        emailValidation();
    };
    
    app.email.onkeyup = function () {
        emailValidation();
    };
    
    app.email.onfocus = function () {
        emailValidation();
    };
    
    app.email.onblur = function () {
        emailValidation();
    };
    
    app.passwordConfirm.onchange = function () {
        confirmPasswordValidation();
    };
    
    app.passwordConfirm.onkeyup = function () {
        confirmPasswordValidation();
    };
    
    app.passwordConfirm.onfocus = function () {
        confirmPasswordValidation();
    };
    
    app.passwordConfirm.onblur = function () {
        confirmPasswordValidation();
    };
    
    app.password.onkeyup = function () {
        passwordValidation();
    };
    
    app.password.onchange = function () {
        passwordValidation();
    };
    
    app.password.onfocus = function () {
        passwordValidation();
    };
    
    app.password.onblur = function () {
        passwordValidation();
    };
    
    app.button.onclick = function () {
        spanButton.parentNode.removeChild(spanButton);

        var div = document.createElement('div');
        div.innerHTML = '<div class="spinner">\
                        <div class="bounce1"></div>\
                        <div class="bounce2"></div>\
                        <div class="bounce3"></div>\
                        </div>';
        document.getElementById('spinner').appendChild(div);
        
        setTimeout(function wait(){
            window.location.pathname = "registerSucess.html";
        }, 3000);
    };

    init();

})();
