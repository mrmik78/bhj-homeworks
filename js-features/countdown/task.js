// const countdown = setInterval(() => {
//     const output = document.getElementById("timer");
//     output.textContent -= 1;
//     if (output.textContent < 0) {
//         output.textContent = 0;
//         alert("Вы победили в конкурсе!");
//         clearInterval(countdown);
//     }
// }, 1000);  



const timer = document.getElementById("timer");
  timer.textContent = 5;
  const addText = function(){
  timer.textContent = (+timer.textContent -1).toString();
if (timer.textContent < 0) {
    timer.textContent = 0;
    alert('Вы победили в конкурсе!!!');
    clearInterval(timerId);
    window.location.href = 'https://netology.ru';   
  };

  }
 let timerId = setInterval(addText, 600)