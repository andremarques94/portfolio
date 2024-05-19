function a(){let e=document.createElement("header");return e.className="flex sticky top-0 items-center justify-between px-4 py-3 bg-gray-900 text-white z-50",e.appendChild(d()),e.appendChild(h()),e.appendChild(u()),e}function d(){let e=document.createElement("a");e.href="https://www.linkedin.com/in/andrelourencomarques",e.target="_blank";let t=document.createElement("img");return t.className="invisible md:visible h-12 w-12 rounded-full transition-transform duration-500 ease-in-out transform hover:scale-110",t.src="./assets/me.jpg",t.alt="Andr\xE9 Marques",e.appendChild(t),e}function h(){let e=document.createElement("nav");return e.className="flex items-center gap-6",e.innerHTML=`
      <a class = 'text-xl font-bold transition-colors duration-500 ease-in-out text-white hover:text-red-500' href="#/">Home</a>
      <a class = 'text-xl font-bold transition-colors duration-500 ease-in-out text-white hover:text-red-500' href="#/about">About</a>
      <a class = 'text-xl font-bold transition-colors duration-500 ease-in-out text-white hover:text-red-500' href="#/projects">Projects</a>
      <a class = 'text-xl font-bold transition-colors duration-500 ease-in-out text-white hover:text-red-500' href="#/contact">Contact</a>`,e}function u(){let e=document.createElement("a");return e.addEventListener("click",()=>{alert("Still not available, but you can check my LinkedIn profile!")}),e.className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-md bg-slate-950 text-sm font-medium hover:bg-red-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 transition-colors duration-500 ease-in-out text-white",e.innerHTML=`
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="h-5 w-5"
      >
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
        <polyline points="7 10 12 15 17 10"></polyline>
        <line x1="12" x2="12" y1="15" y2="3"></line>
      </svg>
      <span class="transition-colors duration-500 ease-in-out text-white">Download CV</span>`,e}function i(){let e=document.createElement("footer");return e.className="sticky bottom-0 bg-gray-900 px-4 py-3 overscroll-none sm:px-6 lg:px-8 z-50",e.innerHTML=`
      <div class="flex items-center justify-between">
        <p class="text-sm text-gray-400">\xA9 2024 Andr\xE9 Marques. All rights reserved.</p>
        <div class="flex space-x-4">
        <a class="text-white hover:text-gray-400 transition-colors" href="https://www.linkedin.com/in/andrelourencomarques" target="_blank">
                  <div class="rounded-full bg-white p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="h-5 w-5 text-black"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect width="4" height="12" x="2" y="9"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </div>
                </a>
          <a class="text-white hover:text-gray-400 transition-colors" href="https://github.com/andremarques94" target="_blank">
                    <div class="rounded-full bg-white p-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="h-5 w-5 text-black"
                      >
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                        <path d="M9 18c-4.51 2-5-2-7-2"></path>
                      </svg>
                    </div>
                  </a>

        </div>
      </div>`,e}function s(e){e.classList.add("flex","justify-center","items-center","h-screen");let t=document.createElement("div");t.classList.add("loader");let n=document.createElement("style");n.innerHTML=`

      .loader {
        width: 85px;
        height: 35px;
        --g1:conic-gradient(from  90deg at 3px  3px ,#0000 90deg,#fff 0);
        --g2:conic-gradient(from -90deg at 22px 22px,#0000 90deg,#fff 0);
        background:var(--g1),var(--g1),var(--g1), var(--g2),var(--g2),var(--g2);
        background-size: 25px 25px;
        background-repeat: no-repeat;
        animation: l6 1s infinite alternate;
      }
      @keyframes l6 {
        0%   {background-position:0 50% ,50% 50% ,100% 50% }
        20%  {background-position:0 0   ,50% 50% ,100% 50% }
        40%  {background-position:0 100%,50%  0  ,100% 50% }
        60%  {background-position:0 50% ,50% 100%,100% 0   }
        80%  {background-position:0 50% ,50% 50% ,100% 100%}
        100% {background-position:0 50% ,50% 50% ,100% 50% }
      }
      `,e.appendChild(n),e.appendChild(t)}var o;async function p(e,t){let r=await import(`${new URL(".",import.meta.url).href}pages/${t}.js`);e.innerHTML="",r.render(e)}function g({path:e,page:t}){o.currentPath.path=e,o.currentPath.page=t}function m({page:e}){let t=document.querySelector("#app"),n=document.createElement("div");s(n),t.innerHTML="",t.appendChild(a()),t.appendChild(n),t.appendChild(i()),p(n,e)}function c(e){if(e===o.currentPath.path)return;let t=Object.keys(o).find(r=>o[r].path===e),n=o[t]||o.home;g(n),m(n)}function C(e){window.location.hash=e}function l(e){return new URL(e).hash.slice(1)}function f(){addEventListener("hashchange",function(e){let t=l(e.newURL);c(t)})}function x(e){o=e,window.location.hash=window.location.hash||o.home.path,c(l(window.location.href)),f()}var M={init:x};export{M as default,C as goTo,c as navigate};
