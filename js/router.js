import { navbar } from './components/header-navbar.js';
import { footer } from './components/footer.js';
import { loader } from './components/loader.js';

let routes;

/**
 *
 * @param {string} controllerName
 * imports and init a controller
 */
async function launchPage(domElement, pageName) {
    loader(domElement); //loading animation
    const baseURL = new URL('.', import.meta.url).href;

    const page = await import(`${baseURL}pages/${pageName}.js`);

    const newDomElement = document.createElement('div');
    document.querySelector('#app').replaceChild(newDomElement, domElement); // replace loading animation with new page

    page.render(newDomElement);
}

/**
 *
 * @param {Object} route
 * Sets the current route
 */
function setCurrentRoute({ path, page }) {
    routes.currentPath.path = path;
    routes.currentPath.page = page;
}

//Render function
//path may be useful for some controllers
function render({ page }) {
    const root = document.querySelector('#app');
    root.className = 'min-h-screen flex flex-col';
    const domElement = document.createElement('div');

    root.innerHTML = '';

    root.appendChild(navbar());
    root.appendChild(domElement);
    root.appendChild(footer());

    launchPage(domElement, page);
}

/**
 *
 * @param {string} path where to navigate
 * @param {boolean} initialFullPageLoad initial page load
 * @param {object} state state obj
 * @returns
 */
export function navigate(path) {
    if (path === routes.currentPath.path) {
        return;
    }

    const routeKey = Object.keys(routes).find(key => routes[key].path === path);
    const route = routes[routeKey] || routes.home;

    setCurrentRoute(route);
    render(route);
}

export function goTo(path) {
    window.location.hash = path;
}

function getPath(urlStr) {
    return new URL(urlStr).hash.slice(1);
}

function navigateOnHashChange() {
    addEventListener('hashchange', function (e) {
        const path = getPath(e.newURL);
        navigate(path);
    });
}

/**
 * Router init
 */
function init(routesObject) {
    routes = routesObject;
    window.location.hash = window.location.hash || routes.home.path;

    navigate(getPath(window.location.href));
    navigateOnHashChange();
}

export default { init };
