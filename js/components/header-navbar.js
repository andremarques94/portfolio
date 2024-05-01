function i(){let e=document.createElement("header");return e.className="flex sticky top-0 items-center justify-between px-4 py-3 bg-gray-900 text-white",e.appendChild(n()),e.appendChild(o()),e.appendChild(a()),e}function n(){let e=document.createElement("a");e.href="https://www.linkedin.com/in/andrelourencomarques",e.target="_blank";let t=document.createElement("img");return t.className="invisible md:visible h-12 w-12 rounded-full transition-transform duration-500 ease-in-out transform hover:scale-110",t.src="./assets/me.jpg",t.alt="Andr\xE9 Marques",e.appendChild(t),e}function o(){let e=document.createElement("nav");return e.className="flex items-center gap-6",e.innerHTML=`
      <a class = 'text-xl font-bold transition-colors duration-500 ease-in-out text-white hover:text-red-500' href="#/">Home</a>
      <a class = 'text-xl font-bold transition-colors duration-500 ease-in-out text-white hover:text-red-500' href="#/about">About</a>
      <a class = 'text-xl font-bold transition-colors duration-500 ease-in-out text-white hover:text-red-500' href="#/portfolio">Portfolio</a>
      <a class = 'text-xl font-bold transition-colors duration-500 ease-in-out text-white hover:text-red-500' href="#/contact">Contact</a>`,e}function a(){let e=document.createElement("a");return e.addEventListener("click",()=>{alert("Still not available, but you can check my LinkedIn profile!")}),e.className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-md bg-slate-950 text-sm font-medium hover:bg-red-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 transition-colors duration-500 ease-in-out text-white",e.innerHTML=`
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
      <span class="transition-colors duration-500 ease-in-out text-white">Download CV</span>`,e}export{i as navbar};
