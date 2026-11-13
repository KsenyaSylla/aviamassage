export function setYear() {
    const el = document.getElementById("year");

    if (!el) {
        return;
    }

    el.textContent = String(new Date().getFullYear());
}
