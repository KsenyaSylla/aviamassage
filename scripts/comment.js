export function comment(commentsData, container, startFrom) {
    const template = document.getElementById("comment-card");

    if (!template) {
        return startFrom;
    }

    const finish = startFrom + 3;
    const comments = commentsData.splice(startFrom, finish);

    comments.forEach((comment) => {
        const card = template.content.cloneNode(true);

        card.querySelector('[data-field="name"]').textContent = comment.name;
        card.querySelector('[data-field="text"]').textContent = comment.text;
        card.querySelector('[data-field="date"]').textContent = comment.date;

        container.appendChild(card);
    });

    return finish;
}
