import { html } from '../../node_modules/lit-html/lit-html.js'
import * as authService from '../services/authService.js';

const loginTemplate = (loginHandler) =>  html`
   <div class="login-page">
   <h1>Login page</h1>

    <form @submit=${loginHandler}>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" name="password" class="form-control" id="exampleInputPassword1">
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
</div>

`


export const loginView = (ctx) => {
    
    const loginHandler = (e) => {
        e.preventDefault();
        let {email,password} = Object.fromEntries(new FormData(e.currentTarget));
        authService.login(email,password)
            .then(user => {
              ctx.page.redirect('/');
              console.log('User is logged in')
            });
    }


    ctx.render(loginTemplate(loginHandler));
    // render(loginTemplate(),document.querySelector('#root'));
};

// accessToken
// : 
// "e4cb2af841b7fbfb980a7941ad5c419ff2ab0b62b2b89d94b9d8675368cac69c"
// email
// : 
// "peter@abv.bg"
// username
// : 
// "Peter"
// _id
// : 
// "35c62d76-8152-4626-8712-eeb96381bea8"