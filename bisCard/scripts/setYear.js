export function setYear() {
    const el = document.getElementById("year");
    let year = new Date;
    year = year.getFullYear();
    el.insertAdjacentHTML("beforebegin", year);
}