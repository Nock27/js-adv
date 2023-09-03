import { render, html } from "../node_modules/lit-html/lit-html.js";

const homeTemplate = () => html `
    <h1>Home</h1>
    <p>Lorem ipsum dolor sit amet consectututr adiprisicing elit. Numqewg, efddfa</p>
`;


const root = document.getElementById('root');

export const homeView = (ctx) => {
    render(homeTemplate(),root)
};