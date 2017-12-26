var canvas = document.querySelector('canvas');


canvas.width = window.innerWidth; 
canvas.height = window.innerHeight;

//super object 
var c = canvas.getContext('2d');

//Sqaure -- first square 
c.fillStyle = "white";
c.fillRect(0, 0, 275,90);
console.log(canvas);

//Sqaure -- second square 
c.fillStyle = "white";
c.fillRect(0, 100, 275,430);
console.log(canvas);

//Sqaure -- third square --neon blue
c.fillStyle = "rgb(0, 225, 255)";
c.fillRect(0, 540, 275, 450);
console.log(canvas);

//Line -- first column 
c.beginPath();
c.moveTo(300, 00);
c.lineTo(300, 1000);
c.lineWidth = 45;
c.stroke();

//Line -- first horizontal 
c.beginPath();
c.moveTo(0,100);
c.lineTo(300,100);
c.lineWidth = 30;
c.stroke();

//Line -- second horizontal 
c.beginPath();
c.moveTo(0,530);
c.lineTo(1700,530);
c.lineWidth = 20;
c.stroke();

//Line -- second column 
c.beginPath();
c.moveTo(140, 530);
c.lineTo(140, 530 );
c.lineWidth = 50;
c.stroke();


//Squaure -- third square - white
c.fillStyle = "white";
c.fillRect(320, 540, 1100, 300);
console.log(canvas);



