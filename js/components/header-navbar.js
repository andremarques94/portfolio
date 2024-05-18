export function navbar() {
    const header = document.createElement('header');
    header.className =
        'flex sticky top-0 items-center justify-between px-4 py-3 bg-gray-900 text-white z-50';

    header.appendChild(imgLogo());
    header.appendChild(nav());
    header.appendChild(cvButton());

    return header;
}

function imgLogo() {
    const anchor = document.createElement('a');
    anchor.href = 'https://www.linkedin.com/in/andrelourencomarques';
    anchor.target = '_blank';

    const img = document.createElement('img');
    img.className =
        'invisible md:visible h-12 w-12 rounded-full transition-transform duration-500 ease-in-out transform hover:scale-110';
    img.src = './assets/me.jpg';
    img.alt = 'André Marques';

    anchor.appendChild(img);
    return anchor;
}

function nav() {
    const nav = document.createElement('nav');
    nav.className = 'flex items-center gap-6';

    nav.innerHTML = `
      <a class = 'text-xl font-bold transition-colors duration-500 ease-in-out text-white hover:text-red-500' href="#/">Home</a>
      <a class = 'text-xl font-bold transition-colors duration-500 ease-in-out text-white hover:text-red-500' href="#/about">About</a>
      <a class = 'text-xl font-bold transition-colors duration-500 ease-in-out text-white hover:text-red-500' href="#/projects">Projects</a>
      <a class = 'text-xl font-bold transition-colors duration-500 ease-in-out text-white hover:text-red-500' href="#/contact">Contact</a>`;
    return nav;
}

function cvButton() {
    const cvButton = document.createElement('a');

    cvButton.addEventListener('click', () => {
        alert('Still not available, but you can check my LinkedIn profile!');
    });

    cvButton.className =
        'hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-md bg-slate-950 text-sm font-medium hover:bg-red-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 transition-colors duration-500 ease-in-out text-white';

    cvButton.innerHTML = `
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
      <span class="transition-colors duration-500 ease-in-out text-white">Download CV</span>`;

    return cvButton;
}
