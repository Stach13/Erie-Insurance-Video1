document.getElementByName("Button").onclick = VideoExplain()

function VideoExplain() {
    var iframe = getElementByName("iframe")
        if (iframe.style.display="none"){
            iframe.style.display="block"
        } 
        else {
            iframe.style.display="none"
        }
}