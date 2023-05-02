// const reveal = Array.from(document.querySelectorAll('.reveal'));
// const vision = window.innerHeight;

// document.addEventListener('scroll', function () {
//     for (let item of reveal) {
//         item.classList.remove('reveal_active');
//         if (item.getBoundingClientRect().top < vision) {
//             item.classList.add('reveal_active');
//         }
//     }
// });


const { innerHeight } = window;
const { top } = reveal.getBoundingClientRect();
if (top < innerHeight && top > 0) {
reveal.classList.add("reveal_active");
} else {
reveal.classList.remove("reveal_active");
}