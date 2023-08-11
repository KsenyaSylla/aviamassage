export function comment(comments, container) {
    console.log("working");

    const article = document.createElement("article");
    article.classList.add("comments__item");
    container.appendChild("beforeend", article); //проверить правильность места, чтобы последовательно все вставлялись по мере продвижения по массиву

    const heading = document.createElement("h3");
    heading.classList.add("comments__item--name");
    heading.innerText = comments.name;
    article
}