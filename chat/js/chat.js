// GLOBAL

const WHOAMI = window.location.search.substring(1, window.location.search.length);

var localStream = null;
var madiaRecorder = null
var audioChunks = [];
var fileReader = new FileReader();

$(document).ready(function () {
    const profilePhotoUrl = localStorage.getItem("recent-image");
    if(profilePhotoUrl){
        $("#profilePhoto").attr("src",profilePhotoUrl)
    }

    $("#profileName").append(WHOAMI);

    renderUsers(HardCoded);

    $("#createUserButton").click(function () {
        addNewUser($("#newUserInput").val());
    });

    $("#fileupload").change(function () {
        let comment = $("#comment");
        let fileupload = $("#fileupload");
        if (fileupload[0].files.length > 0) {
            let file = fileupload[0].files[0];
            comment.val(`file ${file.name}`);
            $("#upload_icon").css("color", "red");

        }
    });

    $("#sendButton").click(function () {
        let comment = $("#comment");
        let fileupload = $("#fileupload");
        let formData = new FormData();
        if (fileupload[0].files.length > 0) {
            let file = fileupload[0].files[0];
            let reader = new FileReader();
            reader.onload = function (event) {
                addNewMessage($("#username").text(), event.target.result, 'file');
            };
            reader.readAsDataURL(file);
            $("#upload_icon").css("color", "#93918f");
            comment.val('');
        } else {
            if (comment.val().length > 1) {
                addNewMessage($("#username").text(), comment.val(), 'text');
                comment.val('');
            }
        }
    });

    $("#voice_recorder").click(function (e) {
        if ($("#voice_recorder").attr("recording") === "false") {
            $("#voice_recorder").attr("recording", "true");
            navigator.mediaDevices
                .getUserMedia({audio: true, video: false})
                .then((stream) => {
                    localStream = stream;
                    madiaRecorder = new MediaRecorder(stream);
                    madiaRecorder.start();
                    $("#voice_recorder").css("color", "red");

                    madiaRecorder.addEventListener("dataavailable", function (event) {
                        console.log(event);
                        addNewMessage($("#username").text(), URL.createObjectURL(event.data), 'audio');
                    });
                });
        } else {
            localStream.getTracks().forEach((track) => {
                track.stop();
            });
            $("#voice_recorder").css("color", "#93918f");
            $("#voice_recorder").attr("recording", "false");
            localStream = null;
            madiaRecorder = null;

        }
    });

    $("#video_recorder").click(function (e) {
        if ($("#video_recorder").attr("recording") === "false") {
            $("#video_recorder").attr("recording", "true");
            navigator.mediaDevices
                .getUserMedia({audio: true, video: true})
                .then((stream) => {
                    localStream = stream;
                    madiaRecorder = new MediaRecorder(stream);
                    madiaRecorder.start();
                    $("#video_recorder").css("color", "red");

                    madiaRecorder.addEventListener("dataavailable", function (event) {
                        console.log(event);
                        addNewMessage($("#username").text(), URL.createObjectURL(event.data), 'video');
                    });
                });
        } else {
            localStream.getTracks().forEach((track) => {
                track.stop();
            });
            $("#video_recorder").css("color", "#93918f");
            $("#video_recorder").attr("recording", "false");
            localStream = null;
            madiaRecorder = null;

        }
    });



});
// GLOBAL




