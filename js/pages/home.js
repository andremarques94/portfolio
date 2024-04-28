function render(elem) {
    elem.style = 'width:100%; height:100%;';
    elem.innerHTML = `
      <nav class="navbar">
              <div class="nav-container">
                  <ul class="nav-links">
                      <li><a href="#home">Home</a></li>
                      <li><a href="#about">About</a></li>
                      <li><a href="#portfolio">Portfolio</a></li>
                      <li><a href="#contact">Contact</a></li>
                  </ul>
                   <img class="nav-logo" src="./assets/me.jpg" alt="André Marques">
              </div>
      </nav>
    <div style="width:100%; height:100%; display:flex;align-items:center;justify-content:center;">
      <div style="text-align: justify;">
        <h4>Hi, my name is</h4>
        <br>
        <h1>André Marques.</h1>
        <br>
        <h2>I'm a software developer.</h2>
        <h3>And this is my personal website.</h3>
        <br>
        <br>
        <br>
        <br>
        <p>Currently based in Lisbon, Portugal</p>
        <p>At the moment I work at <a href="https://codeforall.com/" target="_blank">Code For All</a> as one of
        their lead programming teachers</p>
        <p>There I teach programming to people that want to change their careers and become software developers</p>
      </div>
    </div>`;
}

export { render };
