let data = {
    pic1: "assets/memory Game/1.gif",
    pic2: "assets/memory Game/2.gif",
    pic3: "assets/memory Game/3.gif",
    pic4: "assets/memory Game/4.gif",
    pic5: "assets/memory Game/5.gif",
    pic6: "assets/memory Game/6.gif",
    pic7: "assets/memory Game/Moon.gif",
}

let WinCount = 0

let numbers = [];
for (let i = 1; i <= 6; i++) {
  numbers.push(i, i);
}
numbers.sort(function(){ return Math.random() - 0.5});

let hasFlippedCard = false;
let firstCard, secondCard, firstCardId, secondCardId;
function flipImage(id) {
  
    let image = document.getElementById(id);
    if (!hasFlippedCard) {
       // first click
       hasFlippedCard = true;
       console.log("first click")
       image.src = data["pic" + numbers[parseInt(id) - 1]];
       firstCard = image.src;
       firstCardId = id;
    } else {
        // second click
        console.log("second click")
        hasFlippedCard = false;
        image.src = data["pic" + numbers[parseInt(id) - 1]];
        secondCard = image.src;
        secondCardId = id;
        checkForMatch(firstCard, secondCard);
    }
}
function checkForMatch(firstCard, secondCard) {
    if (firstCard === secondCard) {
        // match!
        WinCount++
        if (WinCount === 6) {
            alert("You win!");
        }
    } else {
        // no match
        console.log("no match")
        unflipCards(firstCardId, secondCardId);
    }
}
function unflipCards(firstCardId, secondCardId) {
    setTimeout(() => {
        document.getElementById(firstCardId).src = data.pic7;
        document.getElementById(secondCardId).src = data.pic7;
    }, 1000);
}
