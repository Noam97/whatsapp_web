// MESSAGES
function renderTextMessage(content, direction) {
    return '  <div class="row message-body">\n' +
        `          <div class="col-sm-12 message-main-${direction}">\n` +
        `            <div class="${direction}">\n` +
        '              <div class="message-text">\n' +
        `               ${content}` +
        '              </div>\n' +
        // '              <span class="message-time pull-right">\n' +
        // '                Sun\n' +
        // '              </span>\n' +
        '            </div>\n' +
        '          </div>\n' +
        '        </div>';

}

function renderFileMessage(content, direction) {
    return '  <div class="row message-body">\n' +
        `          <div class="col-sm-12 message-main-${direction}">\n` +
        `            <div class="${direction}">\n` +
        '              <div class="message-text">\n' +
        `<img id="imgPreview" src="${content}" alt="pic" style="width: 50px; height: 50px;"/>` +
        '              </div>\n' +
        // '              <span class="message-time pull-right">\n' +
        // '                Sun\n' +
        // '              </span>\n' +
        '            </div>\n' +
        '          </div>\n' +
        '        </div>';

}

function renderMediaMessage(content, direction, type) {
    var media_element = document.createElement(type);
    if (type === "video") {
        media_element.style = "width: 1px";
        media_element.style = "hight: 1px";
    }
    media_element.id = 'audio-player';
    if (direction == "sender") {
        media_element.style = "float: right";
    }

    media_element.controls = 'controls';
    media_element.src = content;
    media_element.load();
    var div1 = document.createElement('div');
    var div2 = document.createElement('div');
    var div3 = document.createElement('div');
    var div4 = document.createElement('div');
    div1.classList = "row message-body"
    div2.classList = `col-sm-12 message-main-${direction}`
    div3.classList = `"${direction}"`
    div4.classList = `"message-text"`;
    div4.append(media_element);
    div3.append(div4);
    div2.append(div3);
    div1.append(div2);

    return div1
}


function renderMessages(username) {
    $("#side_two").removeAttr('hidden');
    $("#conversation").empty();
    let messages = '        <div class="row message-previous">\n' +
        '          <div class="col-sm-12 previous">\n' +
        '          </div>\n' +
        '        </div>';
    for (const i in HardCoded[username]["chats"]) {
        const msg = HardCoded[username]["chats"][i];
        let direction = "receiver";
        if (msg["direction"] === "sender") {
            direction = "sender";
        }

        if (msg["type"] === "text") {
            messages += renderTextMessage(msg["content"], direction);
        }
        if (msg["type"] === "file") {
            messages += renderFileMessage(msg["content"], direction);
        }
        if (msg["type"] === "audio" || msg["type"] === "video") {
            var div1 = renderMediaMessage(msg["content"], direction, msg["type"])
            $("#conversation").append(messages);
            $("#conversation").append(div1);
            messages = '';
        }
    }
    $("#conversation").append(messages);

    $("#username").empty().append(username);
}

function addNewMessage(username, msg, type) {
    let dict_msg = {"content": msg, "direction": (username === WHOAMI) ? 'receiver' : 'sender', "type": type};
    HardCoded[username]["chats"].push(dict_msg);
   // CHATS[username].push(dict_msg);
    renderMessages(username);
    let side_two = document.getElementById("side_two");
    side_two.scrollTop = side_two.scrollHeight;

    let conversation = document.getElementById("conversation");
    conversation.scrollTop = conversation.scrollHeight;
}


// MESSAGES