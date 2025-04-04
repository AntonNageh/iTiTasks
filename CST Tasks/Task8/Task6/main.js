let selectedCard = "";
let child;

function selectCard(radio) {
    selectedCard = radio.value;
}

function submit() {
    let message = document.getElementById("text").value;

    if (!selectedCard) {
        alert("Please select a card first.");
        return;
    }

    if (!message.trim()) {
        alert("Please enter a personal message.");
        return;
    }

     child = window.open("child.html", "_blank", "width=500,height=600");

    child.onload = function () {
        let div = child.document.getElementById("card");

        let img = child.document.createElement("img");
        img.src = "CardMaker/" + selectedCard;
        img.width = 500;
        img.height = 450;

        let p = child.document.createElement("p");
        p.textContent = message;
        p.style.fontSize = "20px";
        p.style.fontWeight = "bold";
        p.style.textAlign = "center";

        let closeButton = child.document.createElement("button");
        closeButton.textContent = "close preview";
        closeButton.onclick = closeWindow;
        

        // Append elements to the child window's div
        div.appendChild(img);
        div.appendChild(p);
        div.appendChild(closeButton);
    };
}


function closeWindow() {
   child.close();
}