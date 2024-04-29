function r(){let n=document.createElement("nav");return n.className="navbar",n.innerHTML=`
          <div class="nav-container">
            <ul class="nav-links">
              <li><a href="#/home">Home</a></li>
              <li><a href="#/about">About</a></li>
              <li><a href="#/portfolio">Portfolio</a></li>
              <li><a href="#/contact">Contact</a></li>
            </ul>
            <img class="nav-logo" src="./assets/me.jpg" alt="Andr\xE9 Marques">
          </div>`,n}var t;async function s(n,e){(await import(`${new URL(".",import.meta.url).href}pages/${e}.js`)).render(n)}function l({path:n,page:e}){t.currentPath.path=n,t.currentPath.page=e}function u({page:n}){let e=document.querySelector("#app"),a=document.createElement("div");a.appendChild(r()),e.innerHTML="",e.appendChild(a),s(a,n)}function i(n){if(n===t.currentPath.path)return;let e=Object.keys(t).find(o=>t[o].path===n),a=t[e]||t.home;l(a),u(a)}function c(n){return new URL(n).hash.slice(1)}function h(){addEventListener("hashchange",function(n){let e=c(n.newURL);i(e)})}function p(n){t=n,window.location.hash=window.location.hash||t.home.path,i(c(window.location.href)),h()}var m={init:p};export{m as default,i as navigate};
