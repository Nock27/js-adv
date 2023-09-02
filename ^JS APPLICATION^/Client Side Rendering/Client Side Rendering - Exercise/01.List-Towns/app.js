import { html, render } from "../node_modules/lit-html/lit-html.js";

document.getElementById('btnLoadTowns').addEventListener('click',getTowns);

//creating template
const listTemplate = (data) => html`
<ul>
    ${data.map(town => html`
    <li>${town}</li>
    `)}
</ul>
`

function getTowns(e){
    e.preventDefault();
    if(document.getElementById('towns').value.length != 0){
        const root = document.getElementById('root')
        const towns = document.getElementById('towns').value.split(', ');     
        render(listTemplate(towns),root);
    }
}