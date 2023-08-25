export function burger() {
    const burgerMenu = document.querySelector(".navbar__burger");
    const burgerList = document.querySelector(".navbar__list");

    burgerMenu.addEventListener("click", () => {
        if (burgerList.style.display == "flex") {
            burgerList.style.display = "none";
            burgerMenu.firstElementChild.style.display = "flex";
        } else {
            burgerList.style.display = "flex";
            burgerMenu.firstElementChild.style.display = "none";
        }
    });
}