function changeButton(){
    likeButton = document.getElementById('like-button');
    var buttonText = likeButton.innerHTML;

    likeButton.innerHTML = (buttonText == 'Like') ? 'Unlike' : 'Like';
}

var likeButton = document.getElementById('like-button');
likeButton.addEventListener('click', changeButton, false);