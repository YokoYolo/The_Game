
    var myCanvas = document.getElementById('myCanvas');
    var ctx = myCanvas.getContext('2d');
    var currentGame;
    var cow;
    var newNumber;
    var sumNumberOne;
    var sumNumberTwo;
    var scoreText;
    var score = 0;
    var lives = 3;
    var livesText;
    var lifeLostText;
    var currentNumbers =[];
    var numberToDisplay;
    var fallingNumbers = [];
 
var Cow = function(){
  this.x = 500;
  this.y = 650;
  this.width = 130;
  this.height = 110; 
  this.img = './9cfa5a5e244027f5102f16140d2fbc7d.png';   
  // console.log(this);        
}



Cow.prototype.drawcow = function(){
  var that = this;
  theImage = new Image();
  theImage.src = that.img;
  theImage.onload = function(){
  ctx.drawImage(theImage, that.x, that.y, that.width, that.height)
  }
}

  function fallingNumber() {    
  sumNumberOne = Math.floor(1+ Math.random() * 9);
  sumNumberTwo = Math.floor(1+ Math.random() * 9); 
  currentNumbers.push(sumNumberOne, sumNumberTwo); 
  var equation = new  NewNumber(sumNumberOne + sumNumberTwo);
  var numberArray = [equation]
  for(var i = 0; i < 2; i ++){
    var newNumber = new  NewNumber( Math.floor (1+ Math.random() * 18));
    numberArray.push(newNumber);
  }
  fallingNumbers = numberArray;

  for ( var i = 0; i < fallingNumbers.length; i++ ) {
    fallingNumbers[i].move()
  }

if (sumNumberOne.x +50 >= sumNumberTwo.x && sumNumberOne  <= sumNumberTwo + sumNumberTwo.width 
|| sumNumberOne.x +50 >= equation.x && sumNumberOne  <= equation.x + sequation.width
|| sumNumberTwo.x +50 >= equation.x && sumNumberTwo  <= equation.x + sequation.width){
    equation.x == Math.floor(Math.random(equation.x)) && sumNumberOne.x == Math.floor(Math.random(sumNumberOne.x)) &&
    sumNumberTwo.x == Math.floor(Math.random(sumNumberTwo.x));
}
else { }

};


var NewNumber = function(value){
  this.value = value;
    this.x = Math.floor(Math.random() * 700);
    this.y = 50;
    this.width = 35;
    this.height = 35;  
    ctx.font = "35px Arial";
    ctx.fillStyle = "white";
    // console.log(this); 
  }
  


NewNumber.prototype.move = function (){
  setInterval(() => {
    this.y+=15;
  },500)
}


function mainLoop(){

setInterval(()=>{
ctx.clearRect(0,0, myCanvas.width, myCanvas.height);

for ( var i = 0; i < fallingNumbers.length; i++){
  // console.log(fallingNumbers[i].value, fallingNumbers[i].x, fallingNumbers[i].y, fallingNumbers[i].width, fallingNumbers[i].height)
  ctx.fillText(fallingNumbers[i].value, fallingNumbers[i].x, fallingNumbers[i].y, fallingNumbers[i].width, fallingNumbers[i].height);

  if (currentGame.cow.x +130 >= fallingNumbers[i].x && currentGame.cow.x  <= fallingNumbers[i].x + fallingNumbers[i].width &&
    currentGame.cow.y+110 >= fallingNumbers[i].y && currentGame.cow.y <= fallingNumbers[i].y){
      fallingNumbers[i].remove()
      }
  else {
    console.log ("hello there");
}



}

ctx.drawImage(theImage, currentGame.cow.x, currentGame.cow.y, currentGame.cow.width, currentGame.cow.height);

},10)



}


document.getElementById("start-button").onclick = function(e) {
    currentGame = new Game();
    currentGame.cow = new Cow();
    currentGame.cow.drawcow();
    fallingNumber();
    document.getElementsByClassName('game-intro')[0].remove();
    mainLoop();
  };



Cow.prototype.move = function(whichKey){
  ctx.clearRect(this.x, this.y, this.width, this.height);

  switch(whichKey){
    case 'ArrowLeft':
    if(this.canMove(this.x - 15, this.y)){
        this.x -=15;
    }
    break;
    case 'ArrowRight': 
    if(this.canMove(this.x + 15, this.y)){
        this.x +=15;
    }};
  
};


Cow.prototype.canMove = function(futurex){

    if(
      futurex + this.width >= 700 ||
      futurex <= 0 
    ){
      return false
    }
    return true;
};

document.onkeydown = function (e) {    
    currentGame.cow.move(e.key) 
    };