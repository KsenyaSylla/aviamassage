function getNames(className) {
    const names = [];
    const elems = document.querySelectorAll(className);
    elems.forEach(el => {
        names.push(el.innerText);
    });
    return names;
}

function getDates(attributeDate, attributeYear) {
    const dates = {};// формат date: "13 июня", year: "2023"
    const eldates = document.querySelectorAll(attributeDate);
    const elyears = document.querySelectorAll(attributeYear);
}
console.log(getNames(".comments-item__name"));
console.log(getDates('[data-locator="date"]', '[data-locator="year"]'));