const signBtn = document.getElementById("signin__btn");
const welcome = document.getElementById("welcome");
const userId = document.getElementById("user_id");
const form = document.getElementById("signin__form");
const signin = document.getElementById("signin");
const greetingUser = () => {
    signin.classList.remove("signin_active");
    welcome.classList.add("welcome_active");
    userId.innerText = localStorage.userName
}

if (localStorage.userName) {
    greetingUser();
} else {
    signin.classList.add("signin_active");
}

signBtn.addEventListener("click", (func) => {
    func.preventDefault();

    const formData = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/auth");
    xhr.send(formData);
    
    xhr.onload = () => {
        if (xhr.response.success) {
            localStorage.userName = xhr.response["user_id"];
            greetingUser();
        } else {
            alert("Неверный логин/пароль");
        }
    }
    form.reset()
})