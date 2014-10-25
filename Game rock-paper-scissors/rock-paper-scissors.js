var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();

if(userChoice!== "rock"||"paper"||"scissors")
{
    var warning = prompt("Enter a valid value! Either rock of paper, or scissors");
    userChoice = warning;
    }

if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
}
console.log("Computer: " + computerChoice);

var compare = function(choice1,choice2)
    {
        if(choice1 === choice2){
                return "The result is a tie!";
            }
            
         else if(choice1 === "rock"){
                if(choice2 === "scissors"){
                    return "Player 1 -> rock wins";
                    }
                else{
                    return "Computer -> paper wins";
                    }    
             }
             
             else if(choice1 === "paper"){
                if(choice2 === "scissors"){
                    return "Player 1 -> scissors wins";
                    }
                else{
                    return "Computer -> Paper wins";
                    } 
              }
             
                    else if(choice1 === "scissors"){
                if(choice2 === "paper"){
                    return "Player 1 -> scissors wins";
                    }
                else{
                    return "Computer -> rock wins";
                    }   
                }
    };
    
    compare(userChoice,computerChoice);