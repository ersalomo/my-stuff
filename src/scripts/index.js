import 'regenerator-runtime'
import '../public/assets/css/steller.css';
import App from './views/App/InitialApp';


export const load = () => {
    const app = new App({
        content: document.querySelector('#hamburger'),
        drawer: document.querySelector('#drawer'),
        content: document.querySelector('#content')
    });

    window.addEventListener('hashchange', (e) =>{
        app.renderPage()
    });
    window.addEventListener('load', (e) =>{
        app.renderPage();
    })
}