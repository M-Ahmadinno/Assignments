const accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach(item => {
    const header = item.querySelector(".accordion-header");
    const icon = item.querySelector(".icon");

    header.addEventListener("click", () => {
        item.classList.toggle("active");

        icon.classList.toggle("fa-square-plus");
        icon.classList.toggle("fa-square-minus");
    });
});
