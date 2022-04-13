

var hadErrorExist = false;
var charsHadFirstError = false;
var confirmHadFirstError = false
var emptyPasswordError = false

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


    var canRegister = true;
    var userName = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    //check if the user name already exist
    if (userName in HardCoded) {
        canRegister = false;
        if(!hadErrorExist){
            document.getElementById("user_error").style.display = "block"
            // document.getElementById("user_error").insertAdjacentHTML("afterbegin", "<h5 style='color: red'> Username already exists. Try another name</h5>")
            hadErrorExist = true;
        }
    }
    else{
        hadErrorExist = false
        document.getElementById("user_error").style.display = "none";
    }
    function containsNumber(str) {
        return /[0-9]/.test(str);
    }
    function containLetters(str) {
        return (/[a-z]/.test(str) || /[A-Z]/.test(str));
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
    // password contain_chars_numbers
    if (!(containLetters(password) && containsNumber(password)) && password != "") {
        canRegister = false;
        if (!charsHadFirstError) {
            document.getElementById("charsError").style.display = "block"
            charsHadFirstError = true;
        }
    }
    else{
        charsHadFirstError = false
        document.getElementById("charsError").style.display = "none";
    }

    //confirm password
    if (document.getElementById("confirmpassword").value != password) {
        canRegister = false;
        if (!confirmHadFirstError) {
            document.getElementById("confirmError").style.display = "block"
            confirmHadFirstError = true;
        }
    }
    else{
        confirmHadFirstError = false
        document.getElementById("confirmError").style.display = "none";
    }

    //add the user
    if (canRegister) {
        //if the user didnt add photo - default photo

        if( document.getElementById("img").files.length == 0 ) {
            localStorage.setItem("new_user", JSON.stringify({
                password: password,
                profile: "https://www.enduresc.com.au/wordpress/wp-content/uploads/2018/05/user-profile.jpg",
                chats: [],
                displayName: document.getElementById("name").value
            }));
        }
        else{
            localStorage.setItem("new_user", JSON.stringify({
                password: password,
                profile: localStorage.getItem("recent-image"),
                chats: [],
                displayName: document.getElementById("name").value
            }));
        }
        window.location.replace(`../chat/chat.html?${userName}`);
        };
}

