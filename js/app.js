var n;async function s(e,t){(await import(`${new URL(".",import.meta.url).href}pages/${t}.js`)).render(e)}function u({path:e,page:t}){n.currentPath.path=e,n.currentPath.page=t}function h({page:e}){let t=document.querySelector("#app"),o=document.createElement("div");t.innerHTML="",t.appendChild(o),s(o,e)}function r(e){if(e===n.currentPath.path)return;let t=Object.keys(n).find(a=>n[a].path===e),o=n[t]||n.home;u(o),h(o)}function i(e){return new URL(e).hash.slice(1)}function d(){addEventListener("hashchange",function(e){let t=i(e.newURL);r(t)})}function p(e){n=e,window.location.hash=window.location.hash||n.home.path,r(i(window.location.href)),d()}var c={init:p};window.addEventListener("DOMContentLoaded",async()=>{let t=await(await fetch("./js/routes.json")).json();c.init(t)});
