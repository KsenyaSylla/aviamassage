import { setYear } from "./setYear.js";
import { commentsData } from "../data/commentsData.js";
import { comment } from "./comment.js";
import { services } from "./service.js";
import { servicesData } from "../data/servicesData.js";

function addComments() {
    let startFrom = buttonComments.getAttribute("data-startFrom");
    console.log(startFrom);
    comment(commentsData, commentsWrapper, startFrom)
    startFrom += 3;
    return startFrom;
};

const buttonComments = document.querySelector(".comments__showAll");
buttonComments.addEventListener("click", addComments);

const services__wrapper = document.querySelector(".makeRowFrom3");
services(servicesData, services__wrapper);

const commentsWrapper = document.querySelector(".comments__wrapper")
comment(commentsData, commentsWrapper, 0);

// напишем сегодняшний год в копирайте
setYear();