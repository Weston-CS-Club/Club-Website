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