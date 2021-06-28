let result = Math.floor( Math.random() * 20 ) +1; 
let count = 0; 

// console.log(result);

const submitButton = () => {
    //get the value that user entered
    let userInput = parseInt(document.getElementById("user-input").value);
    
    //conditions to check for valid input 
    if((userInput > 20) || (userInput < 1) || (!Number.isInteger(userInput))) { 
        alert("Please enter an Integer between 1 and 20 !") 
        return;
    }
    
    if(userInput === result){
            alert("Correct number! You have a reward!");
            result = Math.floor( Math.random() * 20 ) +1; 
            return;
        }
    else if(userInput !== result){
            alert("Wrong result. You can re-enter the number again!");
            userInput  = parseInt(document.getElementById("user-input").value);
            count++;
            if(count === 3){
                //alert result
                alert("Time's up. The correct number is " + result);
                //reset the game
                count = 0; 
                result = Math.floor( Math.random() * 20 ) +1; 
                return;
            }
    }
        
    document.getElementById("user-input").value=""; //clear the input box 
    
}


    


    
