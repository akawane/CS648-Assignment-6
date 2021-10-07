var num;
for (num = 1; num <= 100; num += 1) {
    if (num % 3 === 0 && num % 5 === 0) {
        window.document.write("Marco! Polo!<br>");
    } else if (num % 3 === 0) {
        window.document.write("Marco!<br>");
    } else if (num % 5 === 0) {
        window.document.write("Polo!<br>");
    } else {
        window.document.write(num + "<br>");
    }
}