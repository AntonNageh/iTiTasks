let red = document.getElementById("red");
let green = document.getElementById("green");
let blue = document.getElementById("blue");
let para = document.getElementById("para");
let input1 = document.getElementById("red")
let input2 = document.getElementById("green")
let input3 = document.getElementById("blue")

document.addEventListener("input", function () {
  let redValue = red.value;
  let greenValue = green.value;
  let blueValue = blue.value;

  para.style.color = `rgb(${redValue},${greenValue},${blueValue})`;
  para.innerHTML = `rgb(${redValue},${greenValue},${blueValue})`;
})


