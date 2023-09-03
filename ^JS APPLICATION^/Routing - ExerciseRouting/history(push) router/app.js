const homeTemplate = () => `
    <h1>Home</h1>
    <p>Lorem ipsum dolor sit amet consectututr adiprisicing elit. Numqewg, efddfa</p>
`;

const articleTemplate = () => `
<h1>Articles</h1>
<p>Lorem ipsum dolor sit amet consectututr adiprisicing elit. Numqewg, efddfa</p>
<p>Lorem ipsum dolor sit amet consectututr adiprisicing elit. Numqewg, efddfa</p>
<p>Lorem ipsum dolor sit amet consectututr adiprisicing elit. Numqewg, efddfa</p>
<p>Lorem ipsum dolor sit amet consectututr adiprisicing elit. Numqewg, efddfa</p>
`

const aboutTemplate = () => `
    <h1>About</h1>
    <p>Lorem ipsum dolor sit amet consectututr adiprisicing elit. Numqewg, efddfa</p>
`;

const routes = {
    '/home' : homeTemplate,
    '/articles' : articleTemplate,
    '/about' : aboutTemplate,
};
const root = document.getElementById('root')

document.body.addEventListener('click', (e) => {
    if(e.target.tagName == 'A'){
        e.preventDefault();

        let url = new URL(e.target.href);

        history.pushState({}, '', url.pathname)
        let template = routes[url.pathname];
        
        root.innerHTML = template(); 
    }
   
})

