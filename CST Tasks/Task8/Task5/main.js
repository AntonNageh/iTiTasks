var image = document.getElementsByTagName("img")[0];

function myFunction() {
    handleOriginal();
    nav();
    handleClone();
}

function handleClone() {
    var clone = image.cloneNode(true); 
    document.body.appendChild(clone);

    document.body.style.height = "100vh";
    document.body.style.position = "relative";


    clone.style.position = "absolute";
    clone.style.left = "0px"; 
    clone.style.bottom = "0px"; 
}

function handleOriginal() {
    image.style.position = "absolute";
    image.style.right = "0px";  
}
function nav() {
    var nav = document.getElementById("nav");

    // Position the nav in the middle of the screen
    nav.style.position = "absolute";
    nav.style.left = "50%"; 
    nav.style.top = "50%"; 
    nav.style.transform = "translate(-50%, -50%)";
}