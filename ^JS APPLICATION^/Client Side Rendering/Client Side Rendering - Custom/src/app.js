import mainTemplate from "./templates/main.js";
import render from "./render.js";
import { getContacts } from "./api.js";
const rootElement = document.getElementById('root');

const contacts = await getContacts();

render(mainTemplate({contacts}),rootElement);

//Dont do that
window.addContact = function (){
    fetch('http://localhost:3030/jsonstore/contacts',{
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({person: 'Jenshen', phone: '7624523345'})
    })
    .then(res => res.json())
    .then(contact => {
        render(mainTemplate({ contacts: [...contacts, contact] }),rootElement);
        })
}

