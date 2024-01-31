window.addEventListener('DOMContentLoaded', VideoExplain, false);

//var button = document.getElementsByTagName('button');
var iframe = document.querySelector('iframe');

//function init(){
    //button[0].addEventListener('click', VideoExplain, false)
   // console.log(button)
//}

function VideoExplain(){
    if (iframe.style.display === "none"){
        iframe.style.display = "block";
    } else {
        iframe.style.display = "none";
    }
}