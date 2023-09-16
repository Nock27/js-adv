import { html } from "../../node_modules/lit-html/lit-html.js";




const registerTemplate = (submitHandler) => html`
    <section id="register">
        <div class="form">
        <h2>Register</h2>
        <form class="login-form" @submit=${submitHandler}>
            <input
            type="text"
            name="email"
            id="register-email"
            placeholder="email"
            />
            <input
            type="password"
            name="password"
            id="register-password"
            placeholder="password"
            />
            <input
            type="password"
            name="re-password"
            id="repeat-password"
            placeholder="repeat password"
            />
            <button type="submit">register</button>
            <p class="message">Already registered? <a href="#">Login</a></p>
        </form>
        </div>
    </section>

`

export const registerView = (ctx) => {
    const submitHandler = (e) => {
        e.preventDefault();
        const fomrData = new FormData(e.currentTarget);
        const email = fomrData.get('email');
        const password = fomrData.get('password');
        const rePass = fomrData.get('re-password');
        if(email.length == 0 || password.length == 0 || rePass.length == 0){
            alert("All fields must be filled");
            return;
            
        }
        if(password != rePass){
            alert('Password dont match');
            return;
        }

        fetch('http://localhost:3030/users/register',{
            method:"POST",
            headers:{
                "content-type": "application/json"
            },
            body: JSON.stringify({email,password})
        })
            .then(res => res.json())
            .then(user => {
                console.log(user.accessToken);
                if(user.accessToken){
                    localStorage.setItem('user',JSON.stringify(user))
                    ctx.user = user;
                    ctx.page.redirect('/')
                }else{
                    alert('Email or password not match')
                }
               
            })
            

    } 


    ctx.render(registerTemplate(submitHandler));
}