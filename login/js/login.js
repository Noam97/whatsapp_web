var hadFirstError = false;
var emptyPasswordError = false
var emptyUserNameError = false

function checkUserName() {
    var userName = document.getElementById("username").value;
    var password = document.getElementById("password").value;
//check if the user name is empty
    if(userName == "") {
        canRegister = false;
        if (!emptyUserNameError) {
            document.getElementById("empty_username").style.display = "block"
            emptyUserNameError = true;
        }
    }
    else {
        emptyUserNameError = false
        document.getElementById("empty_username").style.display = "none"
    }
//user name is not empty
    if (userName != "") {
        if (userName in HardCoded) {
            if(checkPassword(userName) === true) {
                window.location.replace(`chat.html?${userName}`);
            }
        } else if(!hadFirstError) {
            document.getElementById("login_error").insertAdjacentHTML("afterend", "<h5 style='color: red'>username or password is incorrect</h5>")
            hadFirstError = true;
        }
    }
//empty password
    if(password == "") {
        canRegister = false;
        if (!emptyPasswordError) {
            document.getElementById("emptyError").style.display = "block"
            emptyPasswordError = true;
        }
    }
    else {
        emptyPasswordError = false
        document.getElementById("emptyError").style.display = "none"
    }
}

function checkPassword(key) {
    var password = document.getElementById("password").value;
    //the password is correct
    if (HardCoded[key]["password"] === password) {
        return true;
    } else if (!hadFirstError) {
        document.getElementById("login_error").insertAdjacentHTML("afterend", "<h5 style='color: red'> username or password is incorrect</h5>");
        hadFirstError = true;
    }
}