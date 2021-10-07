var num = parseInt(window.prompt("Enter a number to start count down"), 10);
var i;

for (i = num; i >= 0; i--) {
    window.document.write(i + "<br>");
}