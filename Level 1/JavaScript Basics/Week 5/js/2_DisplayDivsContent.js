var divs = document.getElementsByTagName('div'),
    ulResult = document.getElementById('result'),
    i;

for(i in divs) {
    var li = document.createElement('li');
    if(divs[i].textContent) {
        li.innerHTML = divs[i].textContent.replace('\n', '</br>');
        ulResult.appendChild(li);
    }
}