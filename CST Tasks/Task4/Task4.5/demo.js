let radius = prompt("Enter the radius of the circle", "");

let area = Math.PI * radius * radius;

console.log("Area of the circle is " + area);

let SqrtValue = prompt("Enter the Sqrt value", "");

let Sqrt = Math.sqrt(SqrtValue);

console.log("Square root of " + SqrtValue + " is " + Sqrt);

let angle = prompt("Enter the angle in degrees", "");

let radian = angle * (Math.PI / 180);
let cos = Math.cos(radian).toFixed(3);

console.log("Cosine of " + angle + " is " + cos);
