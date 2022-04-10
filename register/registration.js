

var UserHadFirstError = false;
var charsHadFirstError = false;
var confirmHadFirstError = false
var canRegister = true;
function register () {
    var userName = document.getElementById("username").value;
    if (userName in HardCoded) {
        if (!UserHadFirstError) {
            document.getElementById("user_error").insertAdjacentHTML("afterend", "<h5>Username already exists. Try another name</h5>")
            UserHadFirstError = true;
            canRegister = false
        }
    }

    var password = document.getElementById("password").value;

    function containsNumber(str) {
        return /[0-9]/.test(str);
    }

    function containLetters(str) {
        return (/[a-z]/.test(str) || /[A-Z]/.test(str));
    }

    // password contain_chars_numbers
    if (!(containLetters(password) && containsNumber(password))) {
        if (!charsHadFirstError) {
            document.getElementById("charsError").insertAdjacentHTML("afterend", "<h5><p>The password must contain characters and numbers</h5>")
            charsHadFirstError = true
            canRegister = false
        }

//confirm password
        var confirm_password = document.getElementById("confirmpassword").value;
        if (confirm_password != password) {
            if (!confirmHadFirstError) {
                document.getElementById("confirmError").insertAdjacentHTML("afterend", "<h5><p>password mismatch</h5>")
                confirmHadFirstError = true
                canRegister = false
            }
        }
        if (canRegister) {
            HardCoded[userName] = password
        }
    }
}