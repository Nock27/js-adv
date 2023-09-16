import { html, nothing } from "../../node_modules/lit-html/lit-html.js";



const detailsTemplate = (offer, user) => html`
    <section id="details">
          <div id="details-wrapper">
            <img id="details-img" src=${offer.imageUrl} alt="example1" />
            <p id="details-title">${offer.title}</p>
            <p id="details-category">
              Category: <span id="categories">${offer.category}</span>
            </p>
            <p id="details-salary">
              Salary: <span id="salary-number">${offer.salary}</span>
            </p>
            <div id="info-wrapper">
              <div id="details-description">
                <h4>Description</h4>
                <span
                  >${offer.description}</span
                >
              </div>
              <div id="details-requirements">
                <h4>Requirements</h4>
                <span
                  >${offer.requirements}</span
                >
              </div>
            </div>
            <p>Applications: <strong id="applications">1</strong></p>

            <!--Edit and Delete are only for creator-->
           
            <div id="action-buttons">
        
                ${user._id == offer._ownerId
                ? html`
                    <a href="/dashboard/${offer._id}/edit" id="edit-btn">Edit</a>
                    <a href="/dashboard/${offer._id}/delete" id="delete-btn">Delete</a>
                `
                : nothing
                }
              <!--Bonus - Only for logged-in users ( not authors )-->
              <a href="/dashboard/${offer._id}/apply" id="apply-btn">Apply</a>
            </div>
          </div>
        </section>
`

export const detailsView = (ctx) => {
    const user = JSON.parse(localStorage.getItem('user'));
    fetch(`http://localhost:3030/data/offers/${ctx.params.offerId}`)
        .then(offer => offer.json())
        .then(data => ctx.render(detailsTemplate(data, user)))

}