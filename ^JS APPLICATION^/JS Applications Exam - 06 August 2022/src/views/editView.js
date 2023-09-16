import { html } from "../../node_modules/lit-html/lit-html.js";


const editTemplate = (data,submitHandler) => html`
 <section id="edit">
          <div class="form">
            <h2>Edit Offer</h2>
            <form class="edit-form" @submit=${submitHandler}>
              <input
                type="text"
                name="title"
                id="job-title"
                placeholder="Title"
                value=${data.title}
              />
              <input
                type="text"
                name="imageUrl"
                id="job-logo"
                placeholder="Company logo url"
                value=${data.imageUrl}

              />
              <input
                type="text"
                name="category"
                id="job-category"
                placeholder="Category"
                value=${data.category}

              />
              <textarea
                id="job-description"
                name="description"
                placeholder="Description"
                rows="4"
                cols="50"
                

              >${data.description}</textarea>
              <textarea
                id="job-requirements"
                name="requirements"
                placeholder="Requirements"
                rows="4"
                cols="50"
                

              >${data.requirements}</textarea>
              <input
                type="text"
                name="salary"
                id="job-salary"
                placeholder="Salary"
                value=${data.salary}

              />

              <button type="submit">post</button>
            </form>
          </div>
        </section>
`

export const editView = (ctx) => {
    
    const submitHandler = (e) => {
        e.preventDefault();
        const offer = new FormData(e.currentTarget);
        const token = getToken()

        const title = offer.get('title');
        const imageUrl = offer.get('imageUrl');
        const category = offer.get('category');
        const description = offer.get('description');
        const requirements = offer.get('requirements');
        const salary = offer.get('salary');
        fetch(`http://localhost:3030/data/offers/${ctx.params.offerId}`,{
            method:"PUT",
            headers:{
                "content-type":"application/json",
                "X-Authorization" : token
            },
            body:JSON.stringify({
                title,
                imageUrl,
                category,
                description,
                requirements,
                salary
            })
        })
            .then(() => ctx.page.redirect(`/dashboard/${ctx.params.offerId}`))
    }

    fetch(`http://localhost:3030/data/offers/${ctx.params.offerId}`)
        .then(offer => offer.json())
        .then(data => ctx.render(editTemplate(data,submitHandler)))
}
const getToken = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    return user.accessToken;
}