const context = document.getElementById('myCanvas').getContext('2d');

const outerGradient = context.createRadialGradient(100, 100, 20, 150, 150, 120);
outerGradient.addColorStop(0, '#aaccff');
outerGradient.addColorStop(1, '#002288');

context.beginPath();
context.arc(150, 150, 120, 0, Math.PI * 2);
context.fillStyle = outerGradient;
context.fill();
context.closePath();

const innerGradient = context.createRadialGradient(200, 120, 10, 150, 150, 80);
innerGradient.addColorStop(0, '#ffffff');
innerGradient.addColorStop(1, '#3366cc');

context.beginPath();
context.arc(150, 150, 80, 0, Math.PI * 2);
context.fillStyle = innerGradient;
context.fill();
context.closePath();

context.fillStyle = 'white';
context.font = 'bold 90px Arial';
context.textAlign = 'center';
context.textBaseline = 'middle';
context.fillText('A', 150, 150);