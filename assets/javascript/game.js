//Variables
var crystalPics = 'assets/images/';
var win = 0;
var lose = 0;
var counter = 0;
var minNumber = 19;
var maxNumber = 120;
var guessMinnumber = 1;
var guessMaxnumber = 0;

var randomNumber = Math.floor(Math.random() * (maxNumber - minNumber +1) + minNumber);
var winningNumber = 0;
$('#winningNumber').text(randomNumber);
document.getElementById('winningNumber').innerHTML = randomNumber;

$('#crystalPics').each(function(){
    var crystalNumbers = Math.floor(Math.random() * (guessMaxnumber - guessMinnumber) + guessMinnumber);
    crystalPics = $(this);

    crystalPics.attr('assets/images/crystal', 'crystal' + crystalNumbers + '.jpg');
    crystalPics.attr('alt', 'assets/images/crystal: ' + crystalPics.attr('assets/images/crystal'));
    console.log(crystalNumbers);
})







