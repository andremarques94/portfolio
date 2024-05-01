function a(){let t=document.createElement("header");return t.className="flex sticky top-0 items-center justify-between px-4 py-3 bg-gray-900 text-white",t.appendChild(l()),t.appendChild(d()),t.appendChild(h()),t}function l(){let t=document.createElement("a");t.href="https://www.linkedin.com/in/andrelourencomarques",t.target="_blank";let e=document.createElement("img");return e.className="invisible md:visible h-12 w-12 rounded-full transition-transform duration-500 ease-in-out transform hover:scale-110",e.src="./assets/me.jpg",e.alt="Andr\xE9 Marques",t.appendChild(e),t}function d(){let t=document.createElement("nav");return t.className="flex items-center gap-6",t.innerHTML=`
      <a class = 'text-xl font-bold transition-colors duration-500 ease-in-out text-white hover:text-red-500' href="#/">Home</a>
      <a class = 'text-xl font-bold transition-colors duration-500 ease-in-out text-white hover:text-red-500' href="#/about">About</a>
      <a class = 'text-xl font-bold transition-colors duration-500 ease-in-out text-white hover:text-red-500' href="#/portfolio">Portfolio</a>
      <a class = 'text-xl font-bold transition-colors duration-500 ease-in-out text-white hover:text-red-500' href="#/contact">Contact</a>`,t}function h(){let t=document.createElement("a");return t.className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-md bg-slate-950 text-sm font-medium hover:bg-red-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 transition-colors duration-500 ease-in-out text-white",t.innerHTML=`
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
      <span class="transition-colors duration-500 ease-in-out text-white">Download CV</span>`,t}function i(){let t=document.createElement("footer");return t.className="sticky bottom-0 bg-gray-900 px-4 py-3 sm:px-6 lg:px-8",t.innerHTML=`
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
      </div>`,t}var n;async function u(t,e){(await import(`${new URL(".",import.meta.url).href}pages/${e}.js`)).render(t)}function p({path:t,page:e}){n.currentPath.path=t,n.currentPath.page=e}function m({page:t}){let e=document.querySelector("#app"),o=document.createElement("div");e.innerHTML="",e.appendChild(a()),e.appendChild(o),e.appendChild(i()),u(o,t)}function s(t){if(t===n.currentPath.path)return;let e=Object.keys(n).find(r=>n[r].path===t),o=n[e]||n.home;p(o),m(o)}function c(t){return new URL(t).hash.slice(1)}function f(){addEventListener("hashchange",function(t){let e=c(t.newURL);s(e)})}function w(t){n=t,window.location.hash=window.location.hash||n.home.path,s(c(window.location.href)),f()}var y={init:w};export{y as default,s as navigate};
