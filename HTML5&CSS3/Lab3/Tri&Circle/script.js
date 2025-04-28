    const topHalf = document.getElementById("top-half");
    const bottomHalf = document.getElementById("bottom-half");
    let flipCount = 0;

        // Function to toggle visibility of the half circles
    function toggleHalfCircles() {
        flipCount++;
        // Alternate visibility of the top and bottom halves
        if (flipCount % 2 === 1) {
            topHalf.style.display = "none";
            bottomHalf.style.display = "block";
        } else {
            topHalf.style.display = "block";
            bottomHalf.style.display = "none";
        }
        
        // After 10 flips, show the full circle
        if (flipCount === 10) {
            topHalf.style.display = "block";
            bottomHalf.style.display = "block";
            clearInterval(flipInterval); // Stop the flipping
        }
    }
    const flipInterval = setInterval(toggleHalfCircles, 500);
