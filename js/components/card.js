function p({name:l,url:c,description:i}){let a=document.createElement("div");a.classList.add("group","relative","overflow-hidden","rounded-lg","shadow-md","hover:shadow-gray-600","transition-all","duration-300","bg-gray-900");let e=document.createElement("a");e.classList.add("absolute","inset-0"),e.href=c,e.target="_blank";let s=document.createElement("span");s.classList.add("sr-only"),s.textContent="View repository",e.appendChild(s);let n=document.createElement("div");n.classList.add("bg-gray-900","p-4","transition-transform","duration-300","group-hover:-translate-y-0.5");let d=document.createElement("div");d.classList.add("flex","flex-col","justify-between");let t=document.createElement("img");t.alt="Avatar",t.classList.add("rounded-full"),t.height=32,t.src="./assets/icons8-github.svg",t.style="aspect-ratio: 32 / 32; object-fit: cover;",t.width=32;let o=document.createElement("h3");o.classList.add("font-semibold","text-lg","text-gray-50","mt-4"),o.textContent=l,d.appendChild(t),d.appendChild(o);let r=document.createElement("p");return r.classList.add("text-gray-300","mt-4"),r.textContent=i,n.appendChild(d),n.appendChild(r),a.appendChild(e),a.appendChild(n),a}export{p as card};