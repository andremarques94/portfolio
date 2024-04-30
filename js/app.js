function r(){let n=document.createElement("nav");return n.className="navbar",n.innerHTML=`
          <div class="nav-container">
            <ul class="nav-links">
              <li><a href="#/">Home</a></li>
              <li><a href="#/about">About</a></li>
              <li><a href="#/portfolio">Portfolio</a></li>
              <li><a href="#/contact">Contact</a></li>
            </ul>
            <a href="https://www.linkedin.com/in/andrelourencomarques" target="_blank"><img class="nav-logo" src="./assets/me.jpg" alt="Andr\xE9 Marques"></a>
          </div>`,n}var t;async function l(n,e){(await import(`${new URL(".",import.meta.url).href}pages/${e}.js`)).render(n)}function u({path:n,page:e}){t.currentPath.path=n,t.currentPath.page=e}function h({page:n}){let e=document.querySelector("#app"),a=document.createElement("div");a.appendChild(r()),e.innerHTML="",e.appendChild(a),l(a,n)}function i(n){if(n===t.currentPath.path)return;let e=Object.keys(t).find(o=>t[o].path===n),a=t[e]||t.home;u(a),h(a)}function c(n){return new URL(n).hash.slice(1)}function d(){addEventListener("hashchange",function(n){let e=c(n.newURL);i(e)})}function p(n){t=n,window.location.hash=window.location.hash||t.home.path,i(c(window.location.href)),d()}var s={init:p};window.addEventListener("DOMContentLoaded",async()=>{let e=await(await fetch("./js/routes.json")).json();s.init(e)});
