let data = {
    pic1: "assets/marbels/marble1.jpg",
    pic2: "assets/marbels/marble3.jpg"
}

let ImgId = ["pic1", "pic2", "pic3", "pic4", "pic5"];

let images = [];

for (let i = 0; i < 5; i++) {
    images.push(document.getElementById(ImgId[i]));
}

let currentIndex = 0;
let timer;

function startTimer() {
    if (!timer) {
        timer = setInterval(function() {
            for (let i = 0; i < 5; i++) {
                if (i === currentIndex) {
                    images[i].src = data.pic2;
                } else {
                    images[i].src = data.pic1;
                }
            }
            ++currentIndex;
            if (currentIndex === 5) {
                currentIndex = 0;
            }
        }, 1000);
    }
}

function stopTimer() {
    clearInterval(timer);
    timer = null;
}

startTimer();