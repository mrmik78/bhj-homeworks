// const value = document.querySelectorAll('.hole');
// const dead = document.getElementById('dead');
// const missed = document.getElementById('lost');

// for (let i = 0; i < 9; i++) {
//     value[i].onclick = function () {
//         if (value[i].classList.contains('hole_has-mole')) {
//             dead.textContent++;
//         } else {
//             missed.textContent++;
//         }

//         if (+dead.textContent === 10) {
//             alert('Вы выиграли');
//             reset();

//         } else if (+missed.textContent === 5) {
//             alert('Вы проиграли');
//             reset();
//         }
//     }
//     const reset = () => {
//         dead.textContent = 0;
//         missed.textContent = 0;
//     }
// }
const dead = document.getElementById('dead');
const lost = document.getElementById('lost');

for (let i = 1; i < 10; i++) {
    const hole = document.getElementById(`hole${i}`);
    hole.onclick = function () {
    
if (hole.classList.contains('hole_has-mole')) {
  dead.textContent++;
} else {
  lost.textContent++;
}

if (+dead.textContent === 10) {
  dead.textContent = 0;
  lost.textContent = 0;
  alert('Вы выиграли!!!');
 
} else if (+lost.textContent === 5) {
  dead.textContent = 0;
  lost.textContent = 0;
  alert('Вы проиграли :(');
  
    }
 
  }
}