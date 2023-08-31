import mainTemplate from "./templates/main.js";
import {render, html} from "../node_modules/lit-html/lit-html.js"
import { getContacts } from "./api.js";
const rootElement = document.getElementById('root');

const contacts = await getContacts();

render(mainTemplate({contacts, addContactHandler}),rootElement);

//Dont do that
function addContactHandler(e){
    e.preventDefault();
    let formData = new FormData(e.currentTarget)
    let person = formData.get('person')
    let phone = formData.get('phone')
    console.log(person);



    fetch('http://localhost:3030/jsonstore/contacts',{
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({person, phone})
    })
    .then(res => res.json())
    .then(contact => {
        render(mainTemplate({ contacts: [...contacts, contact], addContactHandler }),rootElement);
        })
}

