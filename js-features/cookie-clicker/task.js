const image = document.getElementById('cookie');
const counter = document.getElementById('clicker__counter');

function clickAction() {
    image.width = ++counter.textContent % 2 ? 250 : 200;
}
image.onclick = clickAction;