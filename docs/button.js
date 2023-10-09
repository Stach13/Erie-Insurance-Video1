window.addEventListener('DOMContentLoaded', init, false);

var button = document.getElementsByTagName('button');
var iframe = document.getElementById('myVideo');

function init(){
    button[0].addEventListener('click', VideoExplain, false)
}

function VideoExplain(){
    if (iframe.style.display == "none"){
        iframe.style.display = "block";
    } else {
        iframe.style.display = "none";
    }
}