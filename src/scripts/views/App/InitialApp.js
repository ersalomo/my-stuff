import UrlParser from "../../routes/Url-parser";
import routes from '../../routes/routes'
import DrawerInitiator from "../../utils/DrawerInitiator";

export default class App {
    constructor({
        button,
        drawer,
        content,
    }){
        this._button = button;
        this._drawer = drawer;
        this._content = content;

    }
    _initialAppShell() {
        DrawerInitiator.init({
            button: this._button,
            draw: this._draw,
        })
    }

    async renderPage() {
        const url = UrlParser.parseActiveUrlWithCombiner();
        const page = routes[url]
        this._content.innerHtml = await page.render();
        await page.afterRender();
    }
}