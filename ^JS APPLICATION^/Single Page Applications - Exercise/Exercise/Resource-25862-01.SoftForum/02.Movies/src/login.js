import { homePage } from "./home.js";
import { showView } from "./util.js";

const section = document.querySelector('#form-login');
const form = section.querySelector('form');

form.addEventListener('submit', onSubmit);

export function loginPage(){
    showView(section);
}

async function onSubmit(e){
    e.preventDefault();
    const formData = new FormData(form);

    const email = formData.get('email');
    const password = formData.get('password');

    await login(email,password);
    homePage();
}
    

   
async function login(email,password){
    try{
        const res = await fetch('http://localhost:3030/users/login', {
            method: 'POST',
            headers: {
                'content-type' : 'application.json'
            },
            body: JSON.stringify({email,password})
        });
        if(!res.ok){
            const error = await res.json();
            throw new Error(error.message)
        }
        const user = await res.json();
        localStorage.setItem('user',JSON.stringify(user))
        alert('Succesfull login');
    }catch(err){
        console.log(err.message);
        throw err;
    }
}
// window.loging = login;
