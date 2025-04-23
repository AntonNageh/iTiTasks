const line = document.getElementById("animated-line");
const svg = document.getElementById("svg-container");

let x2 = 0; // Initial x2 position
let y2 = 0; // Initial y2 position
const step = 5; // Step size for each frame

function animateLine() {
    // Increment the line's x2 and y2 positions
    x2 += step;
    y2 += step;

    // Update the line's attributes
    line.setAttribute("x2", x2);
    line.setAttribute("y2", y2);

    // Check if the line reaches the end of the SVG
    if (x2 >= 410 || y2 >= 410) {
        alert("End of animation");
        clearInterval(animationInterval); // Stop the animation
    }
}

// Use setInterval to call animateLine every 50ms
const animationInterval = setInterval(animateLine, 30);



const svgContainer = document.getElementById("svg-container");
const svgContainer2 = document.getElementById("svg-container2");
// Create a new Image object
const image = new Image();
image.src = "assets/images.jpg"; // Path to your image

// When the image loads, add it to the SVG
image.onload = function () {
    // Create an <image> element for the SVG
    const svgImage = document.createElementNS("http://www.w3.org/2000/svg", "image");
    svgImage.setAttributeNS(null, "href", image.src); // Set the image source
    svgImage.setAttributeNS(null, "x", "0"); // X position
    svgImage.setAttributeNS(null, "y", "0"); // Y position
    svgImage.setAttributeNS(null, "width", "400"); // Width of the image
    svgImage.setAttributeNS(null, "height", "400"); // Height of the image

    // Append the image to the SVG container
    svgContainer2.appendChild(svgImage);
    const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text.setAttributeNS(null, "x", "200"); // Center horizontally
    text.setAttributeNS(null, "y", "270"); // Center vertically
    text.setAttributeNS(null, "font-family", "Arial, sans-serif");
    text.setAttributeNS(null, "font-size", "20");
    text.setAttributeNS(null, "fill", "white");
    text.setAttributeNS(null, "text-anchor", "middle");
    text.setAttributeNS(null, "dominant-baseline", "middle");
    text.textContent = "سامو عليكووو التلاجة دي فيها اكل الا انا جعان اوي "; // Arabic text
    
    // Append the text to the SVG container
    svgContainer2.appendChild(text);
};