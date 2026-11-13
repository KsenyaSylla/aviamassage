export function burger() {
    const button = document.querySelector(".navbar__burger");
    const list = document.getElementById("navbar-menu");

    if (!button || !list) {
        return;
    }

    const firstLink = list.querySelector(".list__link");

    const isOpen = () => button.getAttribute("aria-expanded") === "true";

    const setOpen = (open, focusTarget) => {
        button.setAttribute("aria-expanded", String(open));
        button.setAttribute("aria-label", open ? "Закрыть меню" : "Открыть меню");
        list.classList.toggle("navbar__list--open", open);

        if (open && focusTarget === "menu" && firstLink) {
            firstLink.focus();
        }

        if (!open && focusTarget === "button") {
            button.focus();
        }
    };

    button.addEventListener("click", () => {
        setOpen(!isOpen(), isOpen() ? "button" : "menu");
    });

    list.addEventListener("click", (event) => {
        if (event.target.closest("a")) {
            setOpen(false, "button");
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && isOpen()) {
            setOpen(false, "button");
        }
    });

    document.addEventListener("click", (event) => {
        if (!isOpen()) {
            return;
        }

        if (button.contains(event.target) || list.contains(event.target)) {
            return;
        }

        setOpen(false);
    });

    window.addEventListener("resize", () => {
        if (isOpen()) {
            setOpen(false);
        }
    });
}
