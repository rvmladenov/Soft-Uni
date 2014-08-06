function hideOddRows() {
    var rows = document.querySelectorAll('tr'),
        i;

    for (i = 0; i < rows.length; i += 2){
        rows[i].style.display = 'none';
    }
}

var button = document.getElementById('hideRows');
button.addEventListener('click', hideOddRows, false);