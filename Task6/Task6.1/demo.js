let text = "Hello world ..."
let textIndex = -1;

function openWindow() {    
    let child = window.open("child.html", "", "width=150,height=150"); 
    child.focus()
    let timer = setInterval(function() {
        
        if (textIndex < text.length) {
            child.document.body.innerHTML += text[textIndex]
            textIndex++
        } else {    
            clearInterval(timer)
            textIndex = -1;
            child.close()
        }
    }, 100)
}

