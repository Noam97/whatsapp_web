
var HardCoded = {"noamm":"456","a": "1"}
export {HardCoded};


function checkUserName() {

    var userName = document.getElementById("username").value;
//user name not empty
    if (userName != "") {
        for (var key in HardCoded) {
            //username exist, so we have to check tha password
            if (userName == key) {
                checkPassword(key)
            }
        }
        //the user name not exist
    }
    if (HardCoded) {
        document.getElementById("login_error").insertAdjacentHTML("afterend", "<h5>username or password incorrect<font color='red'</h5>")
        HardCoded = false
    }
}

//
function checkPassword(key) {
    var password = document.getElementById("password").value;
    //the password is correct
    if (HardCoded[key] === password) {
        //לעבור לעמוד הבא ..
    }
}
