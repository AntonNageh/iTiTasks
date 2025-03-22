let text = "Hello world ..."
let textIndex = 0;

function openWindow() {    
    let child = window.open("child.html", "", "width=150,height=150"); 
    child.focus()
    let timer = setInterval(function() {
        
        if (textIndex < text.length) {
            child.document.body.innerHTML += text[textIndex]
            textIndex++
        } else {    
            clearInterval(timer)
            child.close()
        }
    }, 100)
}

