let timer;
let position = 0;
let direction = 1;
let ismoving = false; 


let div = document.getElementById("container");
let leftimg = document.getElementById("left");
let rightimg = document.getElementById("right");
let topimg = document.getElementById("top");
let button = document.getElementById("sButthon"); 


function Start() {
    ismoving = true;
    
    timer = setInterval(function () {
        if (position > 90) {
            direction = -1;
        } else if (position <= 0) {
            direction = 1;
        }

        position += 3 * direction;   
        topimg.style.bottom = position + "%";
        leftimg.style.left = position + "%";
        rightimg.style.right = position + "%";
        
    }, 100);
}

function Stop() {
    ismoving = false;
    clearInterval(timer);
}

function Reverse() {
    if (ismoving) {
        Stop();
    } else {
        Start();
    }
}
function Reset() {
    position = 0;
    leftimg.style.left = position + "%";
    rightimg.style.right = position + "%";
    topimg.style.bottom = position + "%";
    Stop()
}