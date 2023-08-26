import { showView } from "./util.js";

const section = document.querySelector('#add-movie');
const formData = section.querySelector('form');

export function createPage(){
    showView(section);
}
