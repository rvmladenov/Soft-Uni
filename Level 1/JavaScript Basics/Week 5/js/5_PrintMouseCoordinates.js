function printCoordinates(event){
    document.getElementById('coords').value += 'X: ' + event.pageX + '; Y: ' + event.pageY + '; Time: ' + new Date() + '\n';
}

document.addEventListener('mousemove', printCoordinates, false);