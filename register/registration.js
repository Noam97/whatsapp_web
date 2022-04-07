// import {HardCoded} from 'login/login.js'

import {HardCoded} from "../login/login"
function register (){

    var userName = document.getElementById("username").value;
    console.log(userName)
    if (HardCoded.has(userName)) {
        document.getElementById("login_error").insertAdjacentHTML("afterend", "<h5>Username already exists. Try another name</h5>")
    } else (HardCoded.push(userName));


    var password = document.getElementById("password").value;

    function contain_chars_numbers(password) {
        var letterNumber = /^[0-9a-zA-Z]+$/;
        if (!(password.value.match(letterNumber))) {

            document.getElementById("login_error").insertAdjacentHTML("afterend", "<h5><p>The password must contain characters and numbers</h5>")
        }
    }

//confirm password
    var confirm_password = document.getElementById("password").value;

    if (confirm_password != password) {
        document.getElementById("login_error").insertAdjacentHTML("afterend", "<h5><p>password mismatch</h5>")
    }

}



