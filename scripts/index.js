import { setYear } from "./setYear.js";
import { burger } from "./burger.js";
import { commentsData } from "../data/commentsData.js";
import { comment } from "./comment.js";
import { services } from "./service.js";
import { servicesData } from "../data/servicesData.js";

const PAGE_SIZE = 3;

const buttonComments = document.querySelector(".comments__showAll");
const commentsWrapper = document.querySelector(".comments__wrapper");
const servicesWrapper = document.querySelector(".makeRowFrom3");

let shownCount = PAGE_SIZE;

function renderComments() {
    comment(commentsData, commentsWrapper, shownCount);
    buttonComments.hidden = shownCount >= commentsData.length;
}

buttonComments.addEventListener("click", () => {
    shownCount = Math.min(shownCount + PAGE_SIZE, commentsData.length);
    renderComments();
});

services(servicesData, servicesWrapper);
renderComments();

// обработчик на бургер-меню
burger();

// напишем сегодняшний год в копирайте
setYear();
