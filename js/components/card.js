export function card({ name, url, description }) {
    const card = document.createElement('div');
    card.classList.add(
        'group',
        'relative',
        'overflow-hidden',
        'rounded-lg',
        'shadow-md',
        'hover:shadow-gray-600',
        'transition-all',
        'duration-300',
        'bg-gray-900'
    );

    const link = document.createElement('a');
    link.classList.add('absolute', 'inset-0', 'z-10');
    link.href = url;
    link.target = '_blank';

    const span = document.createElement('span');
    span.classList.add('sr-only');
    span.textContent = 'View repository';

    link.appendChild(span);

    const content = document.createElement('div');
    content.classList.add(
        'bg-gray-900',
        'p-4',
        'transition-transform',
        'duration-300',
        'group-hover:-translate-y-0.5'
    );

    const header = document.createElement('div');
    header.classList.add('flex', 'flex-col', 'justify-between');

    const avatar = document.createElement('img');
    avatar.alt = 'Avatar';
    avatar.classList.add('rounded-full');
    avatar.height = 32;
    avatar.src = './assets/icons8-github.svg';
    avatar.style = 'aspect-ratio: 32 / 32; object-fit: cover;';
    avatar.width = 32;

    const title = document.createElement('h3');
    title.classList.add('font-semibold', 'text-lg', 'text-gray-50', 'mt-4');
    title.textContent = name;

    header.appendChild(avatar);
    header.appendChild(title);

    const p = document.createElement('p');
    p.classList.add('text-gray-300', 'mt-4');
    p.textContent = description;

    content.appendChild(header);
    content.appendChild(p);

    card.appendChild(link);
    card.appendChild(content);

    return card;
}
