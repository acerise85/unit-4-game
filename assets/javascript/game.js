
$(document).ready(function(){

    //Variables
    var win = 0;
    var lose = 0;
    var guessSum = 0;
    var blueCrystal;
    var greenCyrstal;
    var purpleCyrstal;
    var redCrystal;
    //Variables and math to generate winning number
    var randomNumber = Math.floor(Math.random() * (120 - 19 +1) + 19);
    var winningNumber = 0;
        
        document.getElementById('winningNumber').innerHTML = randomNumber;

    //Blue Crystal image function, assigns random number and adds to total sum
    var blueNumbers = Math.floor(Math.random() * (12 - 1) + 1);
    var blue = 0;
        $('#blueCrystal').on('click',function(){
            if (blue === red && green && purple){

                redNumbers = Math.floor(Math.random() * (12 - 1) + 1);
            }
            blue = blueNumbers;    
            guessSum +=blue;
            document.getElementById('guessSum').innerHTML = guessSum;

            console.log(blue);
            console.log(guessSum);   
            //If statement to determine win or loss in game
            if ( guessSum === randomNumber){

                alert("Your won! " + guessSum);
                win++;
                
                document.getElementById('win').innerHTML = win;
                // var randomNumber = Math.floor(Math.random() * (120 - 19 +1) + 19);
                guessSum = 0;
                randomNumber = 0;
                randomNumber = Math.floor(Math.random() * (120 - 19 +1) + 19);
                $('#winningNumber').text(randomNumber);
                
            }
            else if (guessSum >= randomNumber){
    
             alert("You lost: " + guessSum);
                lose++;
                
                document.getElementById('lose').innerHTML = lose;
                // var randomNumber = Math.floor(Math.random() * (120 - 19 +1) + 19);
                guessSum = 0;
                randomNumber = 0;
                randomNumber = Math.floor(Math.random() * (120 - 19 +1) + 19);
                $('#winningNumber').text(randomNumber);
            }
        
        })

    //Green Crystal image function, assigns random number and adds to total sum
        var greenNumbers = Math.floor(Math.random() * (12 - 1) + 1);
        var green = 0;
        $('#greenCrystal').on('click',function(){
            //if function to determin if random number has already been assigned to another crystal
            if (green === blue && red && purple){

                greenNumbers = Math.floor(Math.random() * (12 - 1) + 1);
            }
            green = greenNumbers;
            guessSum +=green;
            document.getElementById('guessSum').innerHTML = guessSum;

            console.log(green);   
            console.log(guessSum);
            //If statement to determine win or loss in game
            if ( guessSum === randomNumber){

                alert("Your won! " + guessSum);
                win++;
                
            document.getElementById('win').innerHTML = win;
            // var randomNumber = Math.floor(Math.random() * (120 - 19 +1) + 19);
            guessSum = 0;
            randomNumber = 0;
            randomNumber = Math.floor(Math.random() * (120 - 19 +1) + 19);
            $('#winningNumber').text(randomNumber);
        }
            else if (guessSum >= randomNumber){
    
                alert("You lost: " + guessSum);
                lose++;
                
                document.getElementById('lose').innerHTML = lose;
                // var randomNumber = Math.floor(Math.random() * (120 - 19 +1) + 19);
                guessSum = 0;
                randomNumber = 0;
                randomNumber = Math.floor(Math.random() * (120 - 19 +1) + 19);
                $('#winningNumber').text(randomNumber);
            }
                  //if win/lose alert 
        
        })

    //Red Crystal image function, assigns random number and adds to total sum
        var redNumbers = Math.floor(Math.random() * (12 - 1) + 1);
        var red = 0;
        $('#redCrystal').on('click',function(){
        //if function to determin if random number has already been assigned to another crystal
            if (red === blue && green && purple){

                redNumbers = Math.floor(Math.random() * (12 - 1) + 1);
            }
        red = redNumbers;
        guessSum +=red; 
        document.getElementById('guessSum').innerHTML = guessSum;

        console.log(red);   
        console.log(guessSum);
        //If statement to determine win or loss in game
            if ( guessSum === randomNumber){

                 alert("Your won! " + guessSum);
                win++;
                
            document.getElementById('win').innerHTML = win;
            // var randomNumber = Math.floor(Math.random() * (120 - 19 +1) + 19);
            guessSum = 0;
            randomNumber = 0;
            randomNumber = Math.floor(Math.random() * (120 - 19 +1) + 19);
            $('#winningNumber').text(randomNumber);
            }   
            else if (guessSum >= randomNumber){
    
            alert("You lost: " + guessSum);
            lose++;
             
            document.getElementById('lose').innerHTML = lose;
            // var randomNumber = Math.floor(Math.random() * (120 - 19 +1) + 19);
            guessSum = 0;
            randomNumber = 0;
            randomNumber = Math.floor(Math.random() * (120 - 19 +1) + 19);
            $('#winningNumber').text(randomNumber);
        }
          
    })

    //Purple Crystal image function, assigns random number and adds to total sum
    var purpleNumbers = Math.floor(Math.random() * (12 - 1) + 1);
    var purple = 0;
    $('#purpleCrystal').on('click',function(){
        //if function to determin if random number has already been assigned to another crystal
            if (purple === blue && green && red){

                purpleNumbers = Math.floor(Math.random() * (12 - 1) + 1);
            }

        purple = purpleNumbers;
        guessSum +=purple;
        document.getElementById('guessSum').innerHTML = guessSum;

        console.log(purple);   
        console.log(guessSum);
        //If statement to determine win or loss in game
            if ( guessSum === randomNumber){

            alert("Your won! " + guessSum);
                win++;
                
            document.getElementById('win').innerHTML = win;
            // var randomNumber = Math.floor(Math.random() * (120 - 19 +1) + 19);
            guessSum = 0;
            randomNumber = 0;
            randomNumber = Math.floor(Math.random() * (120 - 19 +1) + 19);
            $('#winningNumber').text(randomNumber);
            }
            else if (guessSum >= randomNumber){
    
                 alert("You lost: " + guessSum);
                lose++;
                 
                document.getElementById('lose').innerHTML = lose;
                // var randomNumber = Math.floor(Math.random() * (120 - 19 +1) + 19);
                guessSum = 0;
                randomNumber = 0;
                randomNumber = Math.floor(Math.random() * (120 - 19 +1) + 19);
                $('#winningNumber').text(randomNumber);
            }
            
    
    })
})




