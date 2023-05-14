const pollTitle = document.querySelector(".poll__title");
const pollAnswers = document.querySelector(".poll__answers");
const xhr = new XMLHttpRequest();
xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/poll");
xhr.send();

xhr.addEventListener("readystatechange", () => {
    if (xhr.readyState === xhr.DONE && xhr.status == 200) {
        let dataLoad = JSON.parse(xhr.responseText);

        pollTitle.innerText = dataLoad.data.title;
        for (let key in dataLoad.data.answers) {
            const btn = document.createElement("button");
            btn.className = "poll__answer";
            btn.innerText = dataLoad.data.answers[key];

            btn.addEventListener("click", () => {
                alert("Спасибо, ваш голос засчитан!");
            });
            pollAnswers.appendChild(btn);
        }
    }
});