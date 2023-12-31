import { html } from "../../node_modules/lit-html/lit-html.js";



const userView = html`
  <div class="user">
    <a href="/create">Create Offer</a>
    <a href="/logout">Logout</a>
  </div>

       
`

const guestView = html`
  <div class="guest">
      <a href="/login">Login</a>
      <a href="/register">Register</a>
  </div>
`

const navigationTemplate = (user) => html`
<header>
        <!-- Navigation -->
        <a id="logo" href="/"
          ><img id="logo-img" src="./images/logo.jpg" alt=""
        /></a>

        <nav>
          <div>
            <a href="/dashboard">Dashboard</a>
          </div>

          ${user
          ? userView
          : guestView
          }
         
        
        
        </nav>
</header>
`

export const navigationView = (ctx) => {
  const user = localStorage.getItem('user');
  
  return navigationTemplate(user);
}
