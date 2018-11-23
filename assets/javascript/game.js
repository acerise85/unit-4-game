//Variables
var win = 0;
var lose = 0;
var guessSum = 0;
var blueCrystal;
var greenCyrstal;
var purpleCyrstal;
var redCrystal;

var randomNumber = Math.floor(Math.random() * (120 - 19 +1) + 19);
var winningNumber = 0;
$('#winningNumber').text(randomNumber);
document.getElementById('winningNumber').innerHTML = randomNumber;



var blueNumbers = Math.floor(Math.random() * (12 - 1) + 1);
var blue = 0;
var blueCounter = 0;
$('#blueCrystal').on('click',function(){
 
    blue = blueNumbers;    
    blueCounter +=blue;
    


     console.log(blueCounter);
    // console.log(blue);

    
})
var greenNumbers = Math.floor(Math.random() * (12 - 1) + 1);
var green = 0;
var greenCounter = 0;
$('#greenCrystal').on('click',function(){


    if (blueNumbers === greenNumbers){

     greenNumbers = Math.floor(Math.random() * (12 - 1) + 1);

    }

     green = greenNumbers;
    greenCounter +=green;
    

   console.log(greenCounter);
    //  console.log(green);   
    
})

var sum = Number(blueCounter + greenCounter);
var counter = 0;
var guessCounter = 0;

$('#guessSum').on('click', function(){

    var counter = sum;
    guessCounter += counter;
    console.log(guessCounter);

})


if ( blueCounter === randomNumber){

    alert("Your won!" + winningNumber);
}
else if (blueCounter >= randomNumber){

    alert("You lost" + guessCounter);
}




