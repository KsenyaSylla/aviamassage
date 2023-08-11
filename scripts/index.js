import { setYear } from "./setYear.js";
import { commentsData } from "../comments/commentsData.js";
import { comment } from "./comment.js";

// напишем сегодняшний год в копирайте
setYear();
// комментарии, пока сразу все. Далее нужно сделать, чтобы по 3 отражалось
const commentsWrapper = document.querySelector(".comments__wrapper")
comment(commentsData, commentsWrapper);