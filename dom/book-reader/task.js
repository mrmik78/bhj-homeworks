const fontButtons = document.querySelectorAll(".font-size");
const book = document.getElementById("book");

for (const button of fontButtons) {
    button.addEventListener('click', fontChange)
}

function fontChange(event) {
    event.preventDefault()
    document.querySelector(".font-size_active").classList.remove("font-size_active");
    event.target.classList.add('font-size_active');
    const font = event.target.getAttribute('data-size')
    if (font === 'small') {
        book.classList.add('book_fs-small')
    }
    if (font === 'big') {
        book.classList.add('book_fs-big')
    }
    if (font === null) {
        book.classList.remove('book_fs-big', 'book_fs-small')
    }
}