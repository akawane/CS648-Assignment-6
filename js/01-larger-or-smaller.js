var number1 = parseInt(window.prompt("Enter the First Number"), 10);
var number2 = parseInt(window.prompt("Enter the Second Number"), 10);
if (number1 > number2) {
    window.document.write("The larger Number: " + number1);
} else if (number2 > number1) {
    window.document.write("The larger Number: " + number2);
} else {
    window.document.write("Both Numbers are same.");
}