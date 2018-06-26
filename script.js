
    var myCanvas = document.getElementById('myCanvas');
    var ctx = myCanvas.getContext('2d');
    var currentGame;
    var cow;
    var newnumber;
    var scoreText;
    var score = 0;
    var lives = 3;
    var livesText;
    var lifeLostText;
 
    



var Cow = function(){
  this.x = 240;
  this.y = 500;
  this.width = 130;
  this.height = 110;
  this.img = './9cfa5a5e244027f5102f16140d2fbc7d.png';   
  console.log(this);        
}



Cow.prototype.drawcow = function(){
  var that = this;
  theImage = new Image();
  theImage.src = that.img;
  theImage.onload = function(){
    ctx.drawImage(theImage, that.x, that.y, that.width, that.height)
  }
}



  var fallingNumber = function generateRandomNumber () {    
  var sumNumber1 = Math.floor (1+ Math.random() * 9);
  var sumNumber2 = Math.floor (1+ Math.random() * 9);   
  var equation;
  equation = sumNumber1 + sumNumber2;
  var numberArray = [equation]
  for(var i = 0; i < 3; i ++){
    var newNumber = Math.floor (1+ Math.random() * 18);
    numberArray.push(newNumber);
  }
  return numberArray

};


// var NewNumber = function(){
//     this.x = 240;
//     this.y = 500;
//     this.width = 80;
//     this.height = 80;
//     console.log(this); 
//    };
//    var blah = new NewNumber();
//    console.log("blah: ", blah);
   
// NewNumber.prototype.drawnewnumber = function(){
//   console.log("hello: ", fallingNumber)
//   ctx.fillText(fallingNumber, this.x, this.y, this.width, this.height);

//   }


// blah.drawnewnumber();


document.getElementById("start-button").onclick = function(e) {
    currentGame = new Game();
    currentGame.cow = new Cow();
    currentGame.cow.drawcow();
    // currentGame.newnumber = new NewNumber();
    // currentGame.newnumber.drawnewnumber();
    document.getElementsByClassName('game-intro')[0].remove();
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
     
    }
  };

  ctx.drawImage(theImage, this.x, this.y, this.width, this.height);
};

Cow.prototype.canMove = function(futurex, futurey){
//   if(
//     futurex + this.width >= currentGame.obstacle.x &&
//      futurex <= currentGame.obstacle.x + currentGame.obstacle.width &&
//      futurey + this.height >= currentGame.obstacle.y &&
//      futurey <= currentGame.obstacle.y + currentGame.obstacle.height
//     ){
    //   return false
    // } else 
    if(
      futurex + this.width >= 500 ||
      futurex <= 0 ||
      futurey + this.height >= 700 ||
      futurey <= 0
    ){
      return false
    }
    return true;

};

document.onkeydown = function (e) {    
    currentGame.cow.move(e.key) 
    
    }


// var Obstacle = function(x,y,width,height){
//   this.x = x;
//   this.y = y;
//   this.height = height;
//   this.width = width;
// }

// Obstacle.prototype.draw = function(){
//   ctx.fillRect(this.x, this.y, this.width, this.height);
// }



    // this.badGuesses = [];
    // this.goodGuesses = [];
    // this.errorsLeft = 3;
    // this.correctResults = [];
  

 



//   fallingNumber.ptototype.move = function () {

//   fallingNumber.getXPosition = function() {
// 		return x;
// 	};
//   fallingNumber.getYPosition = function() {
// 		return y;
//   };
  
//   fallingNumber.getType = function (){
// 		return type;
//   }

// };

  



// var Number = function () {

//   this.numbers = function (i) {
//   for (var i = 0; i <= 100; i++) {
//       console.log(i);
//     }}
//   this.badGuesses = [];
//   this.goodGuesses = [];
//   this.errorsLeft = 3;
//   this.correctResults = [];
//   }

// public void paint(printedNumber){
//   g.setColor(Color.CYAN);
//   g.fillRect(numXLocation,numYLocation,numSize,numSize);
// }



//  public FallingAnswer (){
//   generateRandomXLocation();
//   generateRandomNumber();
//   generateRandomFallSpeed();
// };


// public void update(){


//   if(squareYLocation >= canvas.height){
//       generateRandomXLocation();
//       generateRandomFallSpeed()
//       numYLocation = -fallingNumberSize;
//   }

  //glyphicon glyphicon-heart