var coinFlip;
var i;
for (i = 1; i <= 10; i++) {
    coinFlip = Math.round(Math.random());
    if (coinFlip) {
        window.console.log("Heads");
        window.document.write("Heads<br>");
    } else {
        window.console.log("Tails");
        window.document.write("Tails<br>");
    }
}