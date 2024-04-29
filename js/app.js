function r(){let e=document.createElement("nav");return e.className="navbar",e.innerHTML=`
          <div class="nav-container">
            <ul class="nav-links">
              <li><a href="#/home">Home</a></li>
              <li><a href="#/about">About</a></li>
              <li><a href="#/portfolio">Portfolio</a></li>
              <li><a href="#/contact">Contact</a></li>
            </ul>
            <a href="https://www.linkedin.com/in/andrelourencomarques" target="_blank"><img class="nav-logo" src="./assets/me.jpg" alt="Andr\xE9 Marques"></a>
          </div>`,e}var t;async function l(e,n){(await import(`${new URL(".",import.meta.url).href}pages/${n}.js`)).render(e)}function u({path:e,page:n}){t.currentPath.path=e,t.currentPath.page=n}function h({page:e}){let n=document.querySelector("#app"),a=document.createElement("div");a.appendChild(r()),n.innerHTML="",n.appendChild(a),l(a,e)}function i(e){if(e===t.currentPath.path)return;let n=Object.keys(t).find(o=>t[o].path===e),a=t[n]||t.home;u(a),h(a)}function c(e){return new URL(e).hash.slice(1)}function d(){addEventListener("hashchange",function(e){let n=c(e.newURL);i(n)})}function p(e){t=e,window.location.hash=window.location.hash||t.home.path,i(c(window.location.href)),d()}var s={init:p};window.addEventListener("DOMContentLoaded",async()=>{let n=await(await fetch("./js/routes.json")).json();s.init(n)});
