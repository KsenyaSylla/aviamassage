export function services(services, container) {

    services.forEach(service => {
        const article = document.createElement("article");
        article.classList.add("services__item");
        container.appendChild(article);

        const textBlock = document.createElement("div");
        textBlock.classList.add("services__text--block");
        article.appendChild(textBlock);

        const heading = document.createElement("h3");
        heading.classList.add("services__heading");
        heading.innerText = service.name;
        textBlock.appendChild(heading);

        const text = document.createElement("p");
        text.classList.add("services__text");
        text.innerText = service.text;
        textBlock.appendChild(text);

        const priceSym = document.createElement("p");
        priceSym.classList.add("priseSym");
        priceSym.innerText = " р.";
        textBlock.appendChild(priceSym);

        const price = document.createElement("span");
        price.classList.add("price");
        price.innerText = service.price;
        priceSym.insertAdjacentElement("afterbegin", price);
    });
}