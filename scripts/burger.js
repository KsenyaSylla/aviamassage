export function burger() {
    const burgerMenu = document.querySelector(".navbar__burger");
    const burgerList = document.querySelector(".navbar__list");
    const navbarTitle = document.querySelector(".navbar__title");
    const menuTitle = document.createElement("h2");
    burgerMenu.addEventListener("click", () => {
        let text = event.target.innerHTML;
        if (burgerList.style.display == "flex") {
            burgerList.style.display = "none";
            burgerMenu.firstElementChild.style.display = "flex";
            if (text.length > 30) {
                menuTitle.textContent = "";
            } else {
                menuTitle.textContent = text;
                navbarTitle.insertAdjacentElement("afterbegin", menuTitle);
            }
        } else {
            burgerList.style.display = "flex";
            burgerMenu.firstElementChild.style.display = "none";
            menuTitle.remove();
        }
    });
}