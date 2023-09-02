import { html, render } from "../node_modules/lit-html/lit-html.js";
const url = 'http://localhost:3030/jsonstore/advanced/dropdown'
const dropDownListElement = document.getElementById('menu');
const submitButton = document.querySelector('input[type="submit"]');
submitButton.addEventListener('click',onSubmit)

const optionTemplate = (result) => html`
    ${result.map(town => html`
    <option value="${town._id}">${town.text}</option>
    `)}
`
async function get(url){
    const response = await fetch(url)
    const towns = await response.json();
    return towns;
}

window.addEventListener('load',loadScreen);

async function loadScreen(){
    const result = await get(url);
    render(optionTemplate(Object.values(result)),dropDownListElement)
}
async function onSubmit(e){
    e.preventDefault();
    const newTown = document.getElementById('itemText').value
    if(newTown){
        fetch(url,{
            method: 'POST',
            headers: {
                "Content-type": "application/json"
            },
            body:JSON.stringify({"text": newTown})
        })
    }  
    loadScreen();

}

// function onSubmit(e){
//     e.preventDefault();
//     const newTown = document.getElementById('itemText').value;
//     

// window.addEventListener('load',load)
// async function load() {
//     

// }