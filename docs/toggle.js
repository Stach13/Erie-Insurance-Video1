window.addEventListener('DOMContentLoaded', init, false);

function init(){
    var fieldset = document.getElementsByTagName('input');
    for (var i = 0; i < fieldset.length; i++){
        fieldset[i].addEventListener('click', toggle, false);
    }
}

function toggle() {
    var id = this.id;
    switch (id) {
        case "BOLDtoggle": {
            var bold = document.getElementsByClassName('bold');
            for (i = 0; i < bold.length; i++){
                bold[i].classList.toggle('on')
            }
        };
        break;
        case "CCtoggle": {
            var transcript = document.getElementsByClassName('transcript');
            if (transcript.style.display == "none"){
                transcript.style.dislay="block"
            } else {
                transcript.style.display="none"
            }
        }
    }
}