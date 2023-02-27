const image = document.getElementById('cookie');
const counter = document.getElementById('clicker__counter');

function clickAction() {
    counter.textContent++;
    if (counter.textContent % 2 != 0) {
        image.width = 250;
    } else {
        image.width = 200;
    }
}
image.onclick = clickAction;