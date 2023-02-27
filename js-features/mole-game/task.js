const value = document.querySelectorAll('.hole');
const dead = document.getElementById('dead');
const missed = document.getElementById('lost');

for (let i = 0; i < 9; i++) {
    value[i].onclick = function () {
        if (value[i].classList.contains('hole_has-mole')) {
            dead.textContent++;
        } else {
            missed.textContent++;
        }

        if (dead.textContent == 10) {
            dead.textContent = 0;
            missed.textContent = 0;
            alert('Вы выиграли');

        } else if (missed.textContent == 5) {
            dead.textContent = 0;
            missed.textContent = 0;
            alert('Вы проиграли');
        }
    }
}