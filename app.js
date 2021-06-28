const result = Math.floor( Math.random() * 20 ) +1; 
let count = 0; 
let userInput = parseInt(document.getElementById("user-input").value);

const submitButton = () => {
        if(userInput === result){
            alert("Correct number! You have a reward!");
            return;
        }
        else if(userInput !== result){
            alert("Wrong result. You can re-enter the number again!");
            userInput = parseInt(document.getElementById("user-input").value);
            count++;
            if(count === 3){
                alert("Time's up. The correct number is " + result);
                count = 0; 
                return;
            }
            if(userInput === result){
                alert("Correct number! You have a reward!");
                return;
            }
        }
        

    userInput = parseInt(document.getElementById("user-input").value);
    
}


    
