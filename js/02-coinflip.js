var coinFlip = Math.round(Math.random());
var choice = window.prompt("Would you like to opt heads or tails? enter (H/T)");

if (coinFlip) { 
    if (choice === "H") {
        window.document.write("The flip was heads and you chose heads...you win!");
    } else {
        window.document.write("The flip was heads and you chose tails...you lose!");
    }
} else {
    if (choice === "H") {
        window.document.write("The flip was tails and you chose heads...you lose!");
    } else {
        window.document.write("The flip was tails and you chose tails...you win!");
    }
}