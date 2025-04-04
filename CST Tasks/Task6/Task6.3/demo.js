let data = {
    pic1:"assets/SlideShow/1.jpg", 
    pic2:"assets/SlideShow/2.jpg", 
    pic3:"assets/SlideShow/3.jpg", 
    pic4:"assets/SlideShow/4.jpg", 
    pic5:"assets/SlideShow/5.jpg", 
    pic6:"assets/SlideShow/6.jpg", 
};

let image = document.getElementById("image");
let Nextbutton = document.getElementById("NextBtn")
let Prevbutton = document.getElementById("PrevBtn")
    image.src = data.pic1;

    let imageKeys = ["pic1", "pic2", "pic3", "pic4", "pic5", "pic6"];
    Prevbutton.disabled = true;
    let x = 0;
    
function NextWindow(){
    if (x === 4) {
        Nextbutton.disabled = true;
    }
    Prevbutton.disabled = false;
    ++x;
    image.src = data[imageKeys[x]];

}
let timer;

function SlideShow () {
    if(x!=5){
        timer = setInterval(function() {
            NextWindow();     
            if (x === 5) {
                clearInterval(timer);
            }
        }, 1000);
    }
}

function StopWindow () {
    clearInterval(timer);
    timer = null;
}

function PreviousWindow () {
    if (x === 1) {
        Prevbutton.disabled = true;
    }
    Nextbutton.disabled = false;
    x--;
    image.src = data[imageKeys[x]];
}