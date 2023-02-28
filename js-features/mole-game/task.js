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

        if (+dead.textContent === 10) {
            alert('Вы выиграли');
            reset();

        } else if (+missed.textContent === 5) {
            alert('Вы проиграли');
            reset();
        }
    }
    const reset = () => {
        dead.textContent = 0;
        missed.textContent = 0;
    }
}