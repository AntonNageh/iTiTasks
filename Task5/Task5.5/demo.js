let x = 0;
let y = 0;
let dx = 100;
let dy = 100;

function openWindow() {    
    let child = window.open("child.html", "", "width=150,height=150"); 
    child.focus()
    let timer = setInterval(function() {
        child.scrollBy(dx, dy)     
        x += dx;
        y += dy;
        if (x >= 10000 || y >= 10000) {
            child.close()
            x = 0;
            y = 0;
            clearInterval(timer)
        }
    }, 1000)
}