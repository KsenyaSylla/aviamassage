export function comment(commentsData, container, startFrom) {
    // вытащить из commentsData по 3 комментария
    let finish = startFrom + 3;
    let comments = commentsData.splice(startFrom, finish);
    comments.forEach(comment => {
        const article = document.createElement("article");
        article.classList.add("comments__item");
        container.appendChild(article);

        const heading = document.createElement("h3");
        heading.classList.add("comments__item--name");
        heading.innerText = comment.name;
        article.appendChild(heading);

        const text = document.createElement("p");
        text.classList.add("comments__item--text");
        text.innerText = comment.text;
        article.appendChild(text);

        const date = document.createElement("div");
        date.classList.add("comments__item--date");
        date.innerText = comment.date;
        article.appendChild(date);
    });
    return finish;
}