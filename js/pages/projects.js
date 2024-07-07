function p({name:e,url:o,description:n}){let t=document.createElement("div");t.classList.add("group","relative","overflow-hidden","rounded-lg","shadow-md","hover:shadow-gray-600","transition-all","duration-300","bg-gray-900");let a=document.createElement("a");a.classList.add("absolute","inset-0","z-10"),a.href=o,a.target="_blank";let r=document.createElement("span");r.classList.add("sr-only"),r.textContent="View repository",a.appendChild(r);let s=document.createElement("div");s.classList.add("bg-gray-900","p-4","transition-transform","duration-300","group-hover:-translate-y-0.5");let i=document.createElement("div");i.classList.add("flex","flex-col","justify-between");let d=document.createElement("img");d.alt="Avatar",d.classList.add("rounded-full"),d.height=32,d.src="./assets/icons8-github.svg",d.style="aspect-ratio: 32 / 32; object-fit: cover;",d.width=32;let c=document.createElement("h3");c.classList.add("font-semibold","text-lg","text-gray-50","mt-4"),c.textContent=e,i.appendChild(d),i.appendChild(c);let l=document.createElement("p");return l.classList.add("text-gray-300","mt-4"),l.textContent=n,s.appendChild(i),s.appendChild(l),t.appendChild(a),t.appendChild(s),t}function g(e){e.classList.add("flex","justify-center","items-center","h-screen");let o=document.createElement("div");o.classList.add("loader");let n=document.createElement("style");n.innerHTML=`

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
      `,e.appendChild(n),e.appendChild(o)}async function m(){return(await(await fetch("https://api.github.com/users/andremarques94/repos",{method:"GET",headers:{Accept:"application/vnd.github.v3+json"}})).json()).filter(t=>!t.fork).map(({name:t,html_url:a,description:r})=>({name:t,url:a,description:r}))}async function b(e){g(e),e.classList.add("flex","flex-col","md:flex-grow","overflow-x-hidden","overflow-y-scroll","md:flex-row","justify-center","items-center","bg-black","text-white");let o=await m();e.innerHTML="";let n=document.createElement("h1");n.className="text-8xl font-extrabold text-white m-4",n.textContent="PROJECTS",e.appendChild(n);let t=document.createElement("section");t.id="CARDS",t.className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 p-4",e.appendChild(t),o.forEach(a=>{let r=p(a);t.appendChild(r)})}export{b as render};
