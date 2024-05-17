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
    elem.className = 'h-screen flex flex-col items-center justify-center ';

    const repos = await getReposInfo();

    const title = document.createElement('h1');
    title.className = 'text-5xl font-extrabold text-white m-4';
    title.textContent = 'Click on the cards to see the repository!';
    elem.appendChild(title);

    const section = document.createElement('section');
    section.id = 'CARDS';
    section.className =
        'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 md:p-6 bg-gray-950 ';
    elem.appendChild(section);

    repos.forEach(repo => {
        const cardElement = card(repo);
        section.appendChild(cardElement);
    });
}

export { render };
