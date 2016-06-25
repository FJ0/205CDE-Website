{"filter":false,"title":"login.js","tooltip":"/login.js","undoManager":{"mark":0,"position":0,"stack":[[{"start":{"row":0,"column":0},"end":{"row":44,"column":46},"action":"insert","lines":["'use strict';","//Requires less input","","function authLogin() {","//Declares authLogin function","    ","    var user_textbox = document.getElementById(\"username\");","    //Declares variable for locating contents within the textbox with the id \"username\"","    ","    var pass_textbox = document.getElementById(\"password\");","    //Declares variable for locating contents within the textbox with the id \"password\"","    ","    var userText = user_textbox.value;","    //Declares variable for holding contents of username textbox","    ","    var passText = pass_textbox.value;","    //Declares variable for holding contents of username textbox","    ","    if (userText == \"Guest\" && passText == \"Portfolio\") {","    //If the username and password match the above conditions, execute the following code","        ","        window.location.href = \"home.html\";","        //Redirect to the homepage of the portfolio","    }","    ","    else {","    //If the username and password do not match above conditions","        ","        window.alert(\"Invalid username or password. Please try again.\");","        //Pop up window alerting the user to retry","    }","    ","    user_textbox.value = \"\";","    pass_textbox.value = \"\";","    //Reset whatever is within the textboxes after each try","    ","    return false;","    //Terminate function","}","","var button = document.getElementById(\"login_button\");","//Declare variable to find location of the login button","","button.onclick = authLogin;","//Event listener for the aforementioned button"],"id":1}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":44,"column":46},"end":{"row":44,"column":46},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1465990646777,"hash":"e7b85a29a6272eabba4737366c3f04c8bbaefcb6"}