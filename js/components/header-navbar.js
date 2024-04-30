export function navbar() {
    const nav = document.createElement('nav');
    nav.className = 'navbar';
    nav.innerHTML = `
          <div class="nav-container">
            <ul class="nav-links">
              <li><a href="#/">Home</a></li>
              <li><a href="#/about">About</a></li>
              <li><a href="#/portfolio">Portfolio</a></li>
              <li><a href="#/contact">Contact</a></li>
            </ul>
            <a href="https://www.linkedin.com/in/andrelourencomarques" target="_blank"><img class="nav-logo" src="./assets/me.jpg" alt="André Marques"></a>
          </div>`;

    return nav;
}
