async function y(e){e.preventDefault();let t=document.querySelector("#email").value,a=e.target.form.querySelector("#subject").value,d=e.target.form.querySelector("#message").value;await b(t,a,d),e.target.form.reset()}async function b(e,t,a){(await fetch("https://personal-webapp-backend-production.up.railway.app/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,subject:t,text:a})})).ok?alert("Email sent"):alert("Error sending email")}function h(e){e.classList.add("flex","justify-center","items-center","bg-black","text-white","h-screen"),e.appendChild(f())}function f(){let e=document.createElement("section");e.classList.add("bg-black","dark:bg-gray-900","rounded-lg");let t=document.createElement("div");t.classList.add("py-8","lg:py-16","px-4","mx-auto","max-w-screen-md");let a=document.createElement("h2");a.classList.add("mb-4","text-4xl","tracking-tight","font-extrabold","text-center","text-gray-900"),a.innerHTML="Let's get in touch";let d=document.createElement("p");d.classList.add("mb-8","lg:mb-16","font-light","text-center","text-gray-500","sm:text-xl"),d.innerHTML="Want to work together? Have a question? Just want to say hi? Send me an email";let r=document.createElement("form");r.action="#",r.method="POST",r.classList.add("space-y-8");let c=document.createElement("div"),l=document.createElement("label");l.classList.add("block","mb-2","text-sm","font-medium","text-gray-900","dark:text-gray-300"),l.innerHTML="Your email";let n=document.createElement("input");n.type="email",n.id="email",n.classList.add("shadow-sm","bg-gray-50","border","border-gray-300","text-gray-900","text-sm","rounded-lg","focus:ring-primary-500","focus:border-primary-500","block","w-full","p-2.5","dark:bg-gray-700","dark:border-gray-600","dark:placeholder-gray-400","dark:text-white","dark:focus:ring-primary-500","dark:focus:border-primary-500","dark:shadow-sm-light"),n.placeholder="name@email.com",n.required=!0,c.appendChild(l),c.appendChild(n);let m=document.createElement("div"),u=document.createElement("label");u.classList.add("block","mb-2","text-sm","font-medium","text-gray-900","dark:text-gray-300"),u.innerHTML="Subject";let o=document.createElement("input");o.type="text",o.id="subject",o.classList.add("block","p-3","w-full","text-sm","text-gray-900","text-gray-900","text-sm","rounded-lg","focus:ring-primary-500","focus:border-primary-500","block","w-full","p-2.5","dark:bg-gray-700","dark:border-gray-600","dark:placeholder-gray-400","dark:text-white","dark:focus:ring-primary-500","dark:focus:border-primary-500","dark:shadow-sm-light"),o.placeholder="Subject",o.required=!0,m.appendChild(u),m.appendChild(o);let p=document.createElement("div"),g=document.createElement("label");g.classList.add("block","mb-2","text-sm","font-medium","text-gray-900","dark:text-gray-300"),g.innerHTML="Message";let s=document.createElement("textarea");s.id="message",s.classList.add("block","p-3","w-full","text-sm","text-gray-900","text-gray-900","text-sm","rounded-lg","focus:ring-primary-500","focus:border-primary-500","block","w-full","p-2.5","dark:bg-gray-700","dark:border-gray-600","dark:placeholder-gray-400","dark:text-white","dark:focus:ring-primary-500","dark:focus:border-primary-500","dark:shadow-sm-light"),s.placeholder="Your message here",s.required=!0,p.appendChild(g),p.appendChild(s);let i=document.createElement("button");return i.type="submit",i.classList.add("bg-red-500","transition-colors","duration-800","ease-in-out","hover:bg-red-500","text-white","font-medium","rounded-lg","w-full","p-3","text-sm","uppercase","focus:outline-none","focus:ring-2","focus:ring-primary-500","focus:ring-offset-2","dark:bg-red-800","dark:hover:bg-primary-600","dark:focus:ring-primary-500","dark:focus:ring-offset-2"),i.innerHTML="Send Message",r.appendChild(c),r.appendChild(m),r.appendChild(p),r.appendChild(i),t.appendChild(a),t.appendChild(d),t.appendChild(r),e.appendChild(t),i.addEventListener("click",y),e}export{h as render};
