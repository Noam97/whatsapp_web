

var UserHadFirstError = false;
var charsHadFirstError = false;
var confirmHadFirstError = false
var canRegister = true;

window.addEventListener("load",(event)=>{
    document.querySelector("#img").addEventListener("change",function (){
        const reader = new FileReader();
        reader.addEventListener("load",()=>{
            localStorage.setItem("recent-image", reader.result);
        })
        reader.readAsDataURL(this.files[0]);
    })
})

function register () {

    var userName = document.getElementById("username").value;
    if (userName in HardCoded) {
        if (!UserHadFirstError) {
            document.getElementById("user_error").insertAdjacentHTML("afterend", "<h5 style='color: red'> Username already exists. Try another name</h5>")
            UserHadFirstError = true;
            canRegister = false;

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
            document.getElementById("charsError").insertAdjacentHTML("afterend", "<h5 style='color: red'>The password must contain characters and numbers</h5>");
            charsHadFirstError = true;
            canRegister = false;
        }
    }

        //confirm password
        var confirm_password = document.getElementById("confirmpassword").value;
        if (confirm_password != password) {
            if (!confirmHadFirstError) {
                document.getElementById("confirmError").insertAdjacentHTML("afterend", "<h5 style='color: red'> passwords are not matched</h5>");
                confirmHadFirstError = true;
                canRegister = false;
            }
        }


        //add the user
        if (canRegister) {
            HardCoded[userName] =  {
                password: password,
                profile:  "",
                chats: []
            }
            window.location.replace(`../chat/chat.html?${userName}`);
            };




/**
 * var profilPhoto = document.getElementsByID('img').img;
 *
 * Adaptive[0].style.width="20px";
 * Adaptive[0].style.width="20px";
 * console.log(profilPhoto)
 *
function encodeImgtoBase64(element) {
    var reader = new FileReader();
    reader.onloadend = function () {
        $("#base64Code").val(reader.result);
    }
    */

}
