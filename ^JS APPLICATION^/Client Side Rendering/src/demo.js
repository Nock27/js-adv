import { html , render } from '../node_modules/lit-html/lit-html.js';

const template = (items,styleClass) => html `
    <h1>Hello from Lit Html</h1>
    
    ${items.length == 0
        ? html`<p>No users</p>`
        : ''
    }

    <ul class=${styleClass}>
        ${items.map(x => html`<li>${x}</li>`)}
    </ul>

    <button ?disabled=${items.length > 6} @click=${() => onClick(items[0])}>ADD</button>
`;

const root = document.getElementById('root');
const names = ['Pesho','Gosho','Stamat','Maryika']
const templateResult = template(names, 'vertical')
render(templateResult,root)

function onClick(){
    names.push('Pesho-' + Math.random());
    render(template(names, 'vertical'),root);
}
 