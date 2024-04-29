import { navbar } from '../components/header-navbar.js';

function render(elem) {
    elem.style = 'width:100%; height:100%; display:flex;flex-direction:column;';
    elem.appendChild(navbar());

    const content = document.createElement('div');

    content.style =
        'width:100%; height:100%; display:flex;flex-direction:column;justify-content:center;align-items:center;';

    content.innerHTML = `
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
      </div>`;

    elem.appendChild(content);
}

export { render };
