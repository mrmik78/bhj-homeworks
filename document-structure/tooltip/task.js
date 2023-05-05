let hasTooltip = Array.from(document.getElementsByClassName("has-tooltip"));
const tooltipNew = document.createElement("div");

function helptip() {
  tooltipNew.classList.remove("tooltip_active");
}

hasTooltip.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    let tooltipPlace = item.getBoundingClientRect();
    tooltipNew.classList.add("tooltip");
    tooltipNew.title = item.getAttribute("title");
    tooltipNew.textContent = tooltipNew.title;
    tooltipNew.style.top = String(tooltipPlace.bottom) + "px";
    tooltipNew.style.left = String(tooltipPlace.left) + "px";
    item.insertAdjacentElement("afterend", tooltipNew);
    tooltipNew.classList.toggle("tooltip_active");
    item.addEventListener("mouseleave", helptip);
  });
});


