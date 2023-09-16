import { html } from "../../node_modules/lit-html/lit-html.js";

const offerTempalte = (offer) => html`
    <div class="offer">
        <img src=${offer.imageUrl} alt="example1" />
        <p>
            <strong>Title: </strong><span class="title">${offer.title}</span>
        </p>
        <p><strong>Salary:</strong><span class="salary">${offer.salary}</span></p>
        <a class="details-btn" href="/dashboard/${offer._id}">Details</a>
    </div>
`


const dashBoardTemplate = (offers) => html`
    <section id="dashboard">
        <h2>Job Offers</h2>

        <!-- Display a div with information about every post (if any)-->
        ${offers.length != 0
        ?   html` ${offers.map(offer => offerTempalte(offer))} `
        :   html` <h2>No offers yet.</h2> `
        }
       

        <!-- Display an h2 if there are no posts -->
        
    </section>

`

export const dashboardView = (ctx) => {
    fetch('http://localhost:3030/data/offers?sortBy=_createdOn%20desc')
        .then(res => res.json())
        .then(offers =>{
            ctx.render(dashBoardTemplate(offers))
        } )
}