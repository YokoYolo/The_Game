
    var myCanvas = document.getElementById('myCanvas');
    var ctx = myCanvas.getContext('2d');
    var currentGame;
    var cow;
    var newNumber;
    var sumNumberOne;
    var sumNumberTwo;
    var currentNumbers =[];
    var numberToDisplay;
    var fallingNumbers = [];
 
var Cow = function(){
  this.x = 750;
  this.y = 550;
  this.width = 130;
  this.height = 110; 
  this.img = './9cfa5a5e244027f5102f16140d2fbc7d.png';         
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
  //randon number to be add 
  sumNumberOne = Math.floor(1+ Math.random() * 9);
  sumNumberTwo = Math.floor(1+ Math.random() * 9); 
  //array of numbers created
  currentNumbers.push(sumNumberOne, sumNumberTwo); 
  //equation is equal to the sum of previus number 
  var equation = new  NewNumber(sumNumberOne + sumNumberTwo);
 
  var numberArray = [equation]
  //not the right answer
  for(var i = 0; i < 2; i ++){
    var newNumber = new  NewNumber( Math.floor (1+ Math.random() * 18));
  //here we convine the rightand the wrong answer 
    numberArray.push(newNumber);
  }
  //falling number makes the number array a global variable
  fallingNumbers = numberArray;

  for ( var i = 0; i < fallingNumbers.length; i++ ) {
    fallingNumbers[i].move()
  };

  }

  function drawEquation () {
    this.x = 20;
    this.y = 50;
    ctx.font = "35px Arial";
    ctx.fillStyle = "white";
  
    ctx.fillText(`${sumNumberOne} + ${sumNumberTwo} = ...`,this.x,this.y )
  };



// if (sumNumberOne.x +50 >= sumNumberTwo.x && sumNumberOne  <= sumNumberTwo + sumNumberTwo.width 
// || sumNumberOne.x +50 >= equation.x && sumNumberOne  <= equation.x + sequation.width
// || sumNumberTwo.x +50 >= equation.x && sumNumberTwo  <= equation.x + sequation.width){
//     equation.x == Math.floor(Math.random(equation.x)) && sumNumberOne.x == Math.floor(Math.random(sumNumberOne.x)) &&
//     sumNumberTwo.x == Math.floor(Math.random(sumNumberTwo.x));
// }
// else { }

 




var NewNumber = function(value){
  this.value = value;
    this.x = Math.floor(Math.random() * 1200);
    this.y = 100;
    this.width = 35;
    this.height = 35;  
    ctx.font = "35px Arial";
    ctx.fillStyle = "white";
    ; 
  }
  


NewNumber.prototype.move = function (){
  setInterval(() => {
    this.y+=15;
  },500)
}




function checkCollision() {
  for ( var i = 0; i < fallingNumbers.length; i++){
    console.log("FN: ", fallingNumbers[i])
    if(currentGame.cow.x  <= fallingNumbers[i].x + currentGame.cow.width
      && fallingNumbers[i].x <=currentGame.cow.x +currentGame.cow.width && 
      currentGame.cow.y + currentGame.cow.height <= fallingNumbers[i].y + 50  &&
      fallingNumbers[i].y <= currentGame.cow.y+ currentGame.cow.height
    ){
      
      if(fallingNumbers[0].value === fallingNumbers[i].value){
        display("Bravo. Mooh!");
      } 
      
      
      else {
        var select = document.getElementsByClassName('show')[0];
        select.style.display = 'none';
        fallingNumber();
        drawEquation();
      
      }}}
    }





function mainLoop(){

setInterval(()=>{
ctx.clearRect(0,0, myCanvas.width, myCanvas.height);
for ( var i = 0; i < fallingNumbers.length; i++){ 
ctx.fillText(fallingNumbers[i].value, fallingNumbers[i].x, fallingNumbers[i].y, fallingNumbers[i].width, fallingNumbers[i].height);
}
checkCollision()
ctx.drawImage(theImage, currentGame.cow.x, currentGame.cow.y, currentGame.cow.width, currentGame.cow.height);
drawEquation();
},10)
}


document.getElementById("start-button").onclick = function(e) {
    currentGame = new Game();
    currentGame.cow = new Cow();
    // currentGame.lifes = new Lifes();
    currentGame.cow.drawcow();
    // currentGame.lifes.drawlifes();
    fallingNumber();
    drawEquation();
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
      futurex + this.width >= 1700 ||
      futurex + this.width <= 200 ||
      futurex <= 0 
    ){
      return false
    }
    return true;
};

document.onkeydown = function (e) {    
    currentGame.cow.move(e.key) 
    };