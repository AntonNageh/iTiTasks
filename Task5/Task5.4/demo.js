let x = 0;
let y = 0;
let clear = false;
function openWindow() {    
    let dx = 20;
    let dy = 20;
    clear = false;
    let child = window.open("child.html", "", "width=150,height=150"); 
    child.resizeBy(50, 50)
    child.focus()
    let timer = setInterval(function() {
        child.moveBy(dx, dy)     
        x += dx;
        y += dy;
        console.log("New position: (" + x + "," + y + ")");
        
        if (x >= 620 || y >= 620) {
            dx = -20;
            dy = -20;
        } else if (clear === true) {
            clearInterval(timer)
            child.close()
        }
    }, 100)
}
function closeWindow() {
    clear = true;
}