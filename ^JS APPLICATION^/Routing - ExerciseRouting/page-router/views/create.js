import { render, html } from "../node_modules/lit-html/lit-html.js";



const createArticleHandler = (ctx, e) => {
    e.preventDefault();
    let formData = new FormData(e.currentTarget);

    let title = formData.get('title');
    let content = formData.get('content');
    let author = formData.get('author');

    fetch('http://localhost:3030/jsonstore/articles',{
        method:"POST",
        headers:{
            "content-type" : "application/json"
        },
        body:JSON.stringify({title, content, author})
    })
        .then(res => res.json())
        .then(article => {
            ctx.page.redirect(`/articles/${article._id}`)
        })
    

}

const createTemplate = (ctx) => html`
   <form @submit=${createArticleHandler.bind({}, ctx)}>
    <div>   
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title"/>
    </div>
    <div>
        <label htmlFor="title">Content</label>
        <textarea name="content" cols="30" rows="10" id="title"></textarea>
    </div>
    <div>
        <label htmlFor="author">Author</label>
        <textarea name="author" type="text" id="author"></textarea>
    </div>
    <div>
        <input type="submit" value="Create"/>
    </div>

   </form>
    `;
        


export const createView = (ctx) => {
   render(createTemplate(ctx),document.getElementById('root'))

};