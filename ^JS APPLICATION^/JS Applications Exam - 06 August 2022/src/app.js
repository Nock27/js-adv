import page from "../node_modules/page/page.mjs";
import { renderContentMiddleware, renderNavigationMiddleware } from "./middlewares/renderMiddleware.js";
import { createView } from "./views/createView.js";
import { dashboardView } from "./views/dashboardView.js";
import { deleteView } from "./views/deleteView.js";
import { detailsView } from "./views/detailsView.js";
import { editView } from "./views/editView.js";
import { homeView } from "./views/homeView.js";
import { loginView } from "./views/loginView.js";
import { logoutView } from "./views/logoutView.js";
import { registerView } from "./views/registerView.js";

page(renderNavigationMiddleware);
page(renderContentMiddleware);

page('/',homeView);
page('/login',loginView);
page('/register',registerView);
page('/logout', logoutView);
page('/dashboard',dashboardView);
page('/create', createView);
page('/dashboard/:offerId', detailsView);
page('/dashboard/:offerId/edit',editView)
page('/dashboard/:offerId/delete',deleteView)



page.start();