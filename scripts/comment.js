export function comment(commentsData, container, shownCount) {
    const template = document.getElementById("comment-card");

    if (!template) {
        return;
    }

    const fragment = document.createDocumentFragment();

    commentsData.slice(0, shownCount).forEach((comment) => {
        const card = document.importNode(template.content, true);

        card.querySelector('[data-field="name"]').textContent = comment.name;
        card.querySelector('[data-field="text"]').textContent = comment.text;
        card.querySelector('[data-field="date"]').textContent = comment.date;

        fragment.appendChild(card);
    });

    container.replaceChildren(fragment);
}
