import { html } from "../../node_modules/lit-html/lit-html.js";




const loginTemplate = (submitHandler) => html`
    <section id="login">
        <div class="form">
        <h2>Login</h2>
        <form class="login-form" @submit=${submitHandler}>
            <input type="text" name="email" id="email" placeholder="email" />
            <input
            type="password"
            name="password"
            id="password"
            placeholder="password"
            />
            <button type="submit">login</button>
            <p class="message">
            Not registered? <a href="/register">Create an account</a>
            </p>
        </form>
        </div>
    </section>
`

export const loginView = (ctx) => {
    
    const submitHandler = (e) => {
        e.preventDefault();
        const fomrData = new FormData(e.currentTarget);
        const email = fomrData.get('email');
        const password = fomrData.get('password');

        if(email.length == 0 || password.length == 0){
            alert("All fields must be filled");
            return;
            
        }

        fetch('http://localhost:3030/users/login',{
            method:"POST",
            headers:{
                "content-type": "application/json"
            },
            body: JSON.stringify({email,password})
        })
            .then(res => res.json())
            .then(user => {
                if(user.accessToken){
                    localStorage.setItem('user',JSON.stringify(user))
                    ctx.user = user;
                    ctx.page.redirect('/')
                }else{
                    alert('Email or password not match')
                }
               
            })
            

    } 
    
    ctx.render(loginTemplate(submitHandler));
}