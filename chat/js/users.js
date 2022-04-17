// USERS
function renderUsers(listOfUsers, isNewUser) {
    let users = ""
    let currentDate = ""
    let lastMsgContent = ""
    for(const key in listOfUsers) {
        if (key!==WHOAMI) {
            const chatsLength = listOfUsers[key]["chats"].length;
            if(chatsLength > 0) {
                const lastMessage = listOfUsers[key]["chats"][chatsLength - 1];
                const fullDate = new Date(lastMessage["unix_time"]);
                const hour = fullDate.toLocaleTimeString(navigator.language,
                    {hour: '2-digit', minute: '2-digit'});
                const date = fullDate.toLocaleDateString();
                lastMsgContent = (lastMessage['content'].includes("blob:") ||
                    lastMessage['content'].includes("base64")) ? "new media message" : lastMessage['content'];

                // a day has passed
                currentDate = (new Date() - fullDate > 86400000) ? date : hour;
            }
            else {
                lastMsgContent = "";
                currentDate = "";
            }

            users += `      <div class="row sideBar-body" onclick="renderMessages('${key}', ${isNewUser})">\n` +
                '            <div class="col-sm-3 col-xs-3 sideBar-avatar">\n' +
                '              <div class="avatar-icon">\n' +
                `              <img src=${listOfUsers[key]["profile"]}>\n\n` +
                '              </div>\n' +
                '            </div>\n' +
                '            <div class="col-sm-9 col-xs-9 sideBar-main">\n' +
                '              <div class="row">\n' +
                '                <div class="col-sm-8 col-xs-8 sideBar-name">\n' +
                `                  <span class="name-meta">${listOfUsers[key]["displayName"]}</span>\n` +
                '                </div>\n' +
                                '<div class="col-sm-4 col-xs-4 pull-right sideBar-time">'+
                                    `<span class="time-meta pull-right"> ${currentDate}<br>${lastMsgContent}</span>`+
                '                 </div>'+
                '              </div>\n' +
                '            </div>\n' +
                '          </div>\n'
        }
    }
    $(".row.sideBar").empty().append(users);
}

function addNewUser(username, isNewUser) {
    if(isNewUser) {
        AddedChats[username] = {
            profile: "https://images1.ynet.co.il/PicServer5/2018/07/05/8640320/864028421932283640360no.jpg",
            chats: [],
            displayName: username

        };
        renderUsers(AddedChats, isNewUser);
    }
    else {
        HardCoded[username] = {
            profile: "https://images1.ynet.co.il/PicServer5/2018/07/05/8640320/864028421932283640360no.jpg",
            chats: [],
            displayName: username

        };
        renderUsers(HardCoded, isNewUser);
    }
}
// USERS