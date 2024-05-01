function s(t){let e=document.createElement("div");e.innerHTML=`
      <div class="flex items-center justify-center bg-black text-white min-h-screen">
      <div class="flex-1 py-12 sm:py-16 lg:py-20">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-8">
            <div class="lg:pr-8">
              <h1 class="text-2xl font-bold tracking-tight sm:text-5xl">Hi, my name is </h1>
              <h1 class="text-7xl font-extrabold text-white">Andr\xE9 Marques</h1>
              <p class="mt-4 text-lg text-gray-400">I'm a software developer. And this is my personal website.</p>
              <p class="mt-4 text-lg text-gray-400">Currently based in Lisbon, Portugal.</p>
              <p class="mt-4 text-lg text-gray-400">
              At the moment I work at <a class="font-bold transition-colors duration-500 ease-in-out text-red-400 hover:text-red-500" href="https://codeforall.com/">Code For All_</a> as one of their lead programming teachers. There I teach
              programming to people that want to change their careers and become software developers.
              </p>
            </div>
            <div class="relative h-64 sm:h-72 lg:h-full">
              <img
                src="/assets/final-class.jpg"
                alt="Hero image"
                class="absolute inset-0 h-full w-full object-contain"
                width="1200"
                height="900"
                style="aspect-ratio: 1200 / 900; object-fit: cover;"
              />
            </div>
          </div>
        </div>
      </div>
      </div>`,t.appendChild(e)}export{s as render};
