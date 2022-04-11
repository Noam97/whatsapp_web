// USERS
function renderUsers(listOfUsers) {
    let users = ""
    for(const key in listOfUsers) {
        if (key!==WHOAMI) {
            const chatsLength = listOfUsers[key]["chats"].length;
            const lastMessage = listOfUsers[key]["chats"][chatsLength - 1];
            const fullDate = new Date(lastMessage["unix_time"] * 1000);
            const hour = fullDate.toLocaleTimeString(navigator.language,
                {hour: '2-digit', minute:'2-digit'});
            const date = fullDate.toLocaleDateString();
            const lastMsgContent = (lastMessage['content'].includes("blob:http") ||
                lastMessage['content'].includes("/png:base64")) ? "new media message" : lastMessage['content'];

            // a day has passed
            const currentDate = (new Date() - fullDate > 86400000) ? date : hour;

            users += `      <div class="row sideBar-body" onclick="renderMessages('${key}')">\n` +
                '            <div class="col-sm-3 col-xs-3 sideBar-avatar">\n' +
                '              <div class="avatar-icon">\n' +
                `              <img src=${listOfUsers[key]["profile"]}>\n\n` +
                '              </div>\n' +
                '            </div>\n' +
                '            <div class="col-sm-9 col-xs-9 sideBar-main">\n' +
                '              <div class="row">\n' +
                '                <div class="col-sm-8 col-xs-8 sideBar-name">\n' +
                `                  <span class="name-meta">${key}</span>\n` +
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

function addNewUser(username) {
    HardCoded[username] = [];
    renderUsers(HardCoded);
}
// USERS