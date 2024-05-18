function render(elem) {
    const container = document.createElement('div');
    container.classList.add(
        'flex',
        'justify-center',
        'items-center',
        'min-h-screen',
        'pt-8',
        'pb-8',
        'overflow-hidden'
    );
    elem.appendChild(container);
    const innerContainer = document.createElement('div');
    innerContainer.classList.add('mx-auto', 'max-w-7xl', 'px-4', 'sm:px-6', 'lg:px-8');
    container.appendChild(innerContainer);

    const grid = document.createElement('div');
    grid.classList.add('grid', 'grid-cols-1', 'gap-y-16', 'lg:grid-cols-2', 'lg:gap-x-8');
    innerContainer.appendChild(grid);

    const leftColumn = document.createElement('div');
    leftColumn.classList.add('lg:pr-8');
    grid.appendChild(leftColumn);

    const title1 = document.createElement('h1');
    title1.classList.add('text-2xl', 'font-bold', 'tracking-tight', 'sm:text-5xl');
    title1.textContent = 'Hi, and welcome!';

    leftColumn.appendChild(title1);

    const content = document.createElement('div');

    content.classList.add('mt-4', 'text-lg', 'text-gray-400');

    const p1 = document.createElement('p');
    p1.textContent = "I'm a software developer. And this is my personal website.";
    content.appendChild(p1);

    const p2 = document.createElement('p');
    p2.textContent = 'Currently based in Lisbon, Portugal.';
    content.appendChild(p2);

    const p3 = document.createElement('p');
    p3.innerHTML =
        'At the moment I work at <a class="font-bold transition-colors duration-500 ease-in-out text-red-400 hover:text-red-500" target="_blank" href="https://codeforall.com/">Code For All_</a> as one of their lead programming teachers. There I teach programming to people that want to change their careers and become software developers.';
    content.appendChild(p3);

    leftColumn.appendChild(content);
}

export { render };
