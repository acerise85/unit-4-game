//Variables
var crystalPics = 'assets/images/crystal' + '.jpg';
var win = 0;
var lose = 0;
var counter = 0;
var minNumber = 19;
var maxNumber = 120;
var guessMinnumber = 1;
var guessMaxnumber = 12;

var randomNumber = Math.floor(Math.random() * (maxNumber - minNumber +1) + minNumber);
var winningNumber = 0;
$('#winningNumber').text(randomNumber);
document.getElementById('winningNumber').innerHTML = randomNumber;

var crystalValue = [0, 0, 0, 0];

var crystalNumbers = Math.floor(Math.random() * (guessMaxnumber - guessMinnumber) + guessMinnumber);



for(var i = 0; i < crystalValue.length; i++){

    crystalValue.length = 3;
    
    crystalValue.push(crystalNumbers);
        console.log(crystalNumbers);
    var crystalPics = $("<img>");

    

}

   







