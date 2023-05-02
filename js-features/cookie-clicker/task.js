const image = document.getElementById('cookie');
const counter = document.getElementById('clicker__counter');

function clickAction() {
    image.width = ++counter.textContent % 2 ? 250 : 200;
}
image.onclick = clickAction;


// const cookie = document.getElementById("cookie");
// const clickerCounter = document.getElementById("clicker__counter");

// cookie.onclick = function() {
//     clickerCounter.textContent = Number(clickerCounter.textContent) + 1;
//     if(Number(clickerCounter.textContent) % 2 !== 0) {
//         cookie.width = "250";
//         cookie.height = "200";
//     } else {
//         cookie.width = "200";
//         cookie.height = "150";
//     }
// }