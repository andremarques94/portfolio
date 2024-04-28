let routes;

async function launchController(controllerName) {
    try {
        const module = await import(`/js/pages/${controllerName}.js`);
        module.render();
    } catch (error) {
        console.error(error);
    }
}

function setCurrentRoute({ path, page }) {
    routes.currentPath.path = path;
    routes.currentPath.page = page;
}

function navigate(path) {
    if (path === routes.currentPath.path) {
        return;
    }

    console.log(path);
    const routeKey = Object.keys(routes).find(key => routes[key].path === path);
    const route = routes[routeKey] || routes.home;
    console.log(route);

    setCurrentRoute(route);
    launchController(route.page);
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

function init(routesData) {
    routes = routesData;

    window.location.hash = window.location.hash || routes.home.path;

    navigate(getPath(window.location.href));
    navigateOnHashChange();
}

export default { init };
