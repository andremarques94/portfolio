export function navbar() {
    const nav = document.createElement('nav');
    nav.className = 'navbar';
    nav.innerHTML = `
          <div class="nav-container">
            <ul class="nav-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
            <img class="nav-logo" src="./assets/me.jpg" alt="André Marques">
          </div>`;

    return nav;
}
