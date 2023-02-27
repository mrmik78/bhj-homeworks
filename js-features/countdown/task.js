const countdown = setInterval(() => {
    const output = document.getElementById("timer");
    output.textContent -= 1;
    if (output.textContent < 0) {
        output.textContent = 0;
        alert("Вы победили в конкурсе!");
        clearInterval(countdown);
    }
}, 1000);  