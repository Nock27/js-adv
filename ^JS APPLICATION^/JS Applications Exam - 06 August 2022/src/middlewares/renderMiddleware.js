import { render } from "../../node_modules/lit-html/lit-html.js";
import { navigationView } from "../views/navigationView.js";

const wrapperElement = document.querySelector('#wrapper');
const headerContentElement = wrapperElement.querySelector('header');
const mainContentElement = wrapperElement.querySelector('main');


const renderContent = (TemplateResult) => {
    render(TemplateResult,mainContentElement);
}
 
export const renderNavigationMiddleware = (ctx, next) => {
    render(navigationView(ctx),headerContentElement)

    next();
}

export const renderContentMiddleware = (ctx,next) => {
    ctx.render = renderContent;

    next();
}


