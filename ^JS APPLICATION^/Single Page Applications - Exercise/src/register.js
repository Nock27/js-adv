import { updateAuth } from "./auth.js";

const registerSection = document.querySelector('.register')
const registerForm = registerSection.querySelector('form');

registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let formData = new FormData(e.currentTarget);
    let email = formData.get('email');
    let password = formData.get('password');

    fetch('http://localhost:3030/users/register',{
        method: 'POST',
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify({email,password})
    })
        .then(res => res.json())
        .then(user => {
            localStorage.setItem('user',JSON.stringify(user))
            updateAuth();
            alert('Succsefully registered');    
        })
})

export function renderRegister(){
    registerSection.style.display = 'block';
}