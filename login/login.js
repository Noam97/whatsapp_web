
var hadFirstError = false;

function checkUserName() {
    var userName = document.getElementById("username").value;
//user name not empty
    if (userName != "") {
        if (userName in HardCoded) {
            checkPassword(userName)
        } else if(!hadFirstError) {
            document.getElementById("login_error").insertAdjacentHTML("afterend", "<h5>username or password incorrect<font color='red'</h5>")
            hadFirstError = true
        }
    }
}

    function checkPassword(key) {
        var password = document.getElementById("password").value;
        //the password is correct
        if (HardCoded[key] === password) {
            //לעבור לעמוד הבא ..
        } else if (!hadFirstError) {
            document.getElementById("login_error").insertAdjacentHTML("afterend", "<h5> username or password incorrect<font color='red'</h5>")
            hadFirstError = true
        }
    }