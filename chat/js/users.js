// USERS
function renderUsers() {
    console.log(window.location.search);
    let users = ""
    for(const key in CHATS) {
        users += `      <div class="row sideBar-body" onclick="renderMessages('${key}')">\n` +
            '            <div class="col-sm-3 col-xs-3 sideBar-avatar">\n' +
            '              <div class="avatar-icon">\n' +
            '              <img src="assests/red-color.png">\n\n' +
            '              </div>\n' +
            '            </div>\n' +
            '            <div class="col-sm-9 col-xs-9 sideBar-main">\n' +
            '              <div class="row">\n' +
            '                <div class="col-sm-8 col-xs-8 sideBar-name">\n' +
            `                  <span class="name-meta">${key}</span>\n` +
            '                </div>\n' +
            '              </div>\n' +
            '            </div>\n' +
            '          </div>\n'
    }
    $(".row.sideBar").empty().append(users);
}

function addNewUser(username) {
    CHATS[username] = [];
    renderUsers();
}
// USERS