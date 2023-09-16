import { html } from "../../node_modules/lit-html/lit-html.js";



const createTempalate = (submitHandler) => html`
<section id="create">
          <div class="form">
            <h2>Create Offer</h2>
            <form class="create-form" @submit=${submitHandler}>
              <input
                type="text"
                name="title"
                id="job-title"
                placeholder="Title"
              />
              <input
                type="text"
                name="imageUrl"
                id="job-logo"
                placeholder="Company logo url"
              />
              <input
                type="text"
                name="category"
                id="job-category"
                placeholder="Category"
              />
              <textarea
                id="job-description"
                name="description"
                placeholder="Description"
                rows="4"
                cols="50"
              ></textarea>
              <textarea
                id="job-requirements"
                name="requirements"
                placeholder="Requirements"
                rows="4"
                cols="50"
              ></textarea>
              <input
                type="text"
                name="salary"
                id="job-salary"
                placeholder="Salary"
              />

              <button type="submit">post</button>
            </form>
          </div>
        </section>
`

export const createView = (ctx) => {
    
    const submitHandler = (e) => {
        e.preventDefault();
        const offer = new FormData(e.currentTarget);
        const token = getToken()
        
        if(albumIsInvalid(offer)){
            alert('All fields must be filled')
            return;
        }
       
        
        const title = offer.get('title');
        const imageUrl = offer.get('imageUrl');
        const category = offer.get('category');
        const description = offer.get('description');
        const requirements = offer.get('requirements');
        const salary = offer.get('salary');
      
        fetch('http://localhost:3030/data/offers',{
            method: "POST",
            headers: {
                "content-type" : "application/json",
                "X-Authorization" : token
            },
            body: JSON.stringify({
                title,
                imageUrl,
                category,
                description,
                requirements,
                salary
            })
        })
            .then(() => {
                ctx.page.redirect('/dashboard')
            })
        
    }
    
    ctx.render(createTempalate(submitHandler));
}

const albumIsInvalid = (offer) => {
    offer = Object.fromEntries(offer)
    
    const fields = [
        'title',
        'imageUrl',
        'category',
        'description',
        'requirements',
        'salary'
    ]
    return fields.some(x => !offer[x])
}

const getToken = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    return user.accessToken;
}