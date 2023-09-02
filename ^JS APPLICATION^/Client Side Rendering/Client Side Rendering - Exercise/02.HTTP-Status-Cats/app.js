import { html, render } from "../node_modules/lit-html/lit-html.js";
import { cats } from "./catSeeder.js";

const resultSection = document.getElementById('allCats');
console.log(cats);

const catCardTemplate = (cats) => html`
<ul>
    ${cats.map(cat => html`
    <li>
    <img src="./images/${cat.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
    <div class="info">
        <button class="showBtn">Show status code</button>
        <div class="status" style="display: none" id="${cat.id}">
            <h4>Status Code: ${cat.statusCode}</h4>
            <p>${cat.statusMessage}</p>
        </div>
    </div>
</li>
    `)}
</ul>
`
render(catCardTemplate(cats),resultSection)

resultSection.addEventListener('click',onClick);
function onClick(e){
    if(e.target.tagName == 'BUTTON'){
        if(e.target.textContent == 'Show status code'){
            e.target.parentNode.querySelector('.status').style.display = 'block'
            e.target.textContent = 'Hide Status code'
        }else if(e.target.textContent == 'Hide Status code'){
            e.target.parentNode.querySelector('.status').style.display = 'none'
            e.target.textContent = 'Show status code'
        }
       

    }
}