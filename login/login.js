
var HardCoded = {"noamm":"456","a": "1"}


hadError = false;
function checkUserName() {

    var userName = document.getElementById("username").value;
//user name not empty
    if (userName != "") {
        for (var key in HardCoded) {
            //username exist, so we have to check tha password
            if (userName == key) {
                checkPassword(key)
                hadError = false
            } else {
                hadError = true
            }
        }
        //the user name not exist
        if (hadError) {
            document.getElementById("login_error").insertAdjacentHTML("afterend", "<h5>user name not exist</h5>")
            hadError = false
        }
    }
}

//
    function checkPassword(key) {
        var password = document.getElementById("password").value;
        //the password is correct
        if (HardCoded[key] === password) {
            //לעבור לעמוד הבא ..
        } else {
            document.getElementById("login_error").insertAdjacentHTML("afterend", "<h5>password mismatch</h5>")

        }

    }