//Variables
var crystalPics = [
    {name: 'blue', image:'crystal1.jpg'},
    {name: 'green', image:'crystal2.jpg'},
    {name: 'purple', image:'crystal3.jpg'},
    {name: 'red', image:'crystal4.jpg'},
]
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



for(var i = 0; i < crystalPics.length; i++){

   var crystal = $("<img>");

    crystal.attr("numbers", crystalNumbers[i]);
        console.log(crystalNumbers);
        console.log(crystalPics);

        if(crystalNumbers === crystalNumbers){

            var crystalNumbers = Math.floor(Math.random() * (guessMaxnumber - guessMinnumber) + guessMinnumber);

        }
       
}

$('crystal').on('click',function(){



})


   







