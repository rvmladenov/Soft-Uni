function showPrompt() {
    var input = prompt("Enter some number", 254);
    return input;
}

function convertAndShow() {
    var n = showPrompt();
    alert(Number(n).toString(16).toUpperCase());
}

document.addEventListener("DOMContentLoaded", function() {
  convertAndShow();
});