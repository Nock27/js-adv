// [x] improve HTML structure
// [x] create app.js module
// [x] create util.js containing hide and display of view
// [x] placeholders for all views


// implement views
// - create request logic
// - DOM manipulation logic

// [] catalog
// [] login
// [] register
// [] create
// [] details
// [] like
// [] edit
// [] delete

import { homePage } from "./home.js";
import { loginPage } from "./login.js";
import { registerPage } from "./register.js";
import { createPage } from "./create.js";


const routes = {
  '/': homePage,
  '/login' : loginPage,
  '/logout' : logout,
  '/register' : registerPage,
  '/create' : createPage,

};

document.querySelector('nav').addEventListener('click',onNavigate);
document.querySelector('#add-movie-button a').addEventListener('click', onNavigate);
function onNavigate(e){
    if(e.target.tagName == 'A' && e.target.href){
        e.preventDefault();
        const url = new URL(e.target.href);

        const view = routes[url.pathname]
        if(typeof view == 'function'){
            view();
        }
        

    }
}




function logout(){
    alert('Logged out')
}

//Start application in catalog view\
homePage();