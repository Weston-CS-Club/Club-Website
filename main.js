slash = document.getElementById("slash")
function leave(element){
    let list = document.getElementsByClassName("yn")
    for (var i = 0; i<list.length; i++){
        list[i].style.color = "var(--text)"
    }
}

function enterY(element){
    element.style.color = "var(--primary)"
    slash.style.color = "var(--primary)"
}

function enterN(element){
    element.style.color = "var(--error)"
    slash.style.color = "var(--error)"
}

// Special magic making cursor look like terminal
$("#term-line").customCaret();
let termline = $("#term-line")

// If enter key is pressed while focused on terminal text line, run command on that line
termline.on('keyup', function (e) {
    if (e.key === 'Enter' || e.keyCode === 13) {
        let innertex = termline.html();
        enterLine(innertex);
    }
}

);

// Given a "terminal" command, run it
function enterLine(command){
    command = command.replace('<span id="caret"></span>','')
    command = command.replace(/\uFEFF/g,"");

    // Listing the terminal commands
    if (command==="y") {
        console.log("Yes Entered")
    } 
    if (command==="n") {
        console.log("No Entered")
    }
}
