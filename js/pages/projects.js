import { card } from '../components/card';

async function getReposInfo() {
    const response = await fetch('https://api.github.com/users/andremarques94/repos', {
        method: 'GET',
        headers: {
            Accept: 'application/vnd.github.v3+json'
        }
    });

    const data = await response.json();
    const repos = data
        .filter(repo => !repo.fork)
        .map(({ name, html_url, description }) => ({
            name: name,
            url: html_url,
            description: description
        }));

    return repos;
}

async function render(elem) {
    elem.classList.add(
        'flex',
        'flex-col',
        'md:flex-row',
        'justify-center',
        'items-center',
        'bg-black',
        'text-white',
        'h-screen',
        'overflow-y-auto',
        'overflow-x-hidden'
    );

    const repos = await getReposInfo();

    const title = document.createElement('h1');
    title.className = 'text-8xl font-extrabold text-white m-4';
    title.textContent = '';

    elem.appendChild(title);

    const section = document.createElement('section');
    section.id = 'CARDS';
    section.className =
        'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 md:p-6 m-4';
    elem.appendChild(section);

    repos.forEach(repo => {
        const cardElement = card(repo);
        section.appendChild(cardElement);
    });
}

export { render };
