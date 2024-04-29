let routes;

/**
 *
 * @param {string} controllerName
 * imports and init a controller
 */
async function launchPage(domElement, pageName) {
    const baseURL = new URL('.', import.meta.url).href;

    const page = await import(`${baseURL}pages/${pageName}.js`);
    page.render(domElement);
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
    const domElement = document.createElement('div');
    root.innerHTML = '';
    root.appendChild(domElement);

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
