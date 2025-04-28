const canvasElement = document.getElementById('myCanvas');
const context = canvasElement.getContext('2d');

const skyGradient = context.createLinearGradient(0, 0, 0, 280);
skyGradient.addColorStop(0, "blue");
skyGradient.addColorStop(0.5, "lightblue");
skyGradient.addColorStop(1, "white");
context.fillStyle = skyGradient;
context.fillRect(10, 10, 280, 145);

const groundGradient = context.createLinearGradient(0, 0, 0, 280);
groundGradient.addColorStop(0, "teal");
groundGradient.addColorStop(0.3, "green"); 
groundGradient.addColorStop(1, "white");
context.fillStyle = groundGradient;
context.fillRect(10, 160, 280, 145);

context.beginPath();
context.moveTo(100, 120); 
context.lineTo(200, 120); 
context.stroke();
context.lineTo(200, 200); 
context.stroke();
context.moveTo(100, 120); 
context.lineTo(100, 200); 
context.stroke();
