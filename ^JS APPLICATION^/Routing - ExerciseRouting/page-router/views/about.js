import { render, html } from "../node_modules/lit-html/lit-html.js";

const aboutTemplate = () => html`
    <h1>About</h1>
    <p>Lorem ipsum dolor sit amet consectututr adiprisicing elit. Numqewg, efddfa</p>
`;

const root = document.getElementById('root');

export const aboutsView = (ctx) => {
    render(aboutTemplate(),root)
};