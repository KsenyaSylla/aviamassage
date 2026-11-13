export function services(services, container) {
    const template = document.getElementById("service-card");

    if (!template) {
        return;
    }

    const fragment = document.createDocumentFragment();

    services.forEach((service) => {
        const card = template.content.cloneNode(true);

        card.querySelector('[data-field="name"]').textContent = service.name;
        card.querySelector('[data-field="text"]').textContent = service.text;
        card.querySelector('[data-field="price"]').textContent = service.price;

        fragment.appendChild(card);
    });

    container.appendChild(fragment);
}
