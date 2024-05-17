export function card({ name, url, description }) {
    const card = document.createElement('div');
    card.classList.add(
        'group',
        'relative',
        'overflow-hidden',
        'rounded-lg',
        'shadow-md',
        'hover:shadow-red-400',
        'transition-all',
        'duration-300',
        'bg-gray-900'
    );

    const link = document.createElement('a');
    link.classList.add('absolute', 'inset-0', 'z-10');
    link.href = url;

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
        'group-hover:-translate-y-1'
    );

    const header = document.createElement('div');
    header.classList.add('flex', 'items-center', 'justify-between');

    const avatar = document.createElement('img');
    avatar.alt = 'Avatar';
    avatar.classList.add('rounded-full');
    avatar.height = 32;
    avatar.src = '/assets/icons8-github.svg';
    avatar.style = 'aspect-ratio: 32 / 32; object-fit: cover;';
    avatar.width = 32;

    const title = document.createElement('h3');
    title.classList.add('font-semibold', 'text-lg', 'text-gray-50');
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

/*
<div class="group relative overflow-hidden rounded-lg shadow-md dark:shadow-gray-200 hover:shadow-lg transition-all duration-300">
  <a class="absolute inset-0 z-10" href="#">
    <span class="sr-only">View repository</span>
  </a>
  <div class="bg-gray-900 dark:bg-white p-4 transition-transform duration-300 group-hover:-translate-y-1">
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-3">
        <img
          alt="Avatar"
          class="rounded-full"
          height="32"
          src="/placeholder.svg"
          style="aspect-ratio: 32 / 32; object-fit: cover;"
          width="32"
        />
        <h3 class="font-semibold text-lg text-gray-50 dark:text-gray-900">shadcn/ui</h3>
      </div>
      <div class="flex items-center gap-2">
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
          class="w-5 h-5 fill-primary"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>
        <span class="text-sm text-gray-400 dark:text-gray-500">20k</span>
      </div>
    </div>
    <p class="text-sm text-gray-400 dark:text-gray-500 mt-2">
      Beautifully designed components that you can copy and paste into your apps.
    </p>
    <div class="flex items-center gap-2 mt-4 text-sm text-gray-400 dark:text-gray-500">
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
        class="w-4 h-4 fill-gray-400 dark:fill-gray-900"
      >
        <circle cx="12" cy="12" r="10"></circle>
        <circle cx="12" cy="12" r="1"></circle>
      </svg>
      TypeScript
      <div data-orientation="vertical" role="none" class="shrink-0 bg-gray-100 w-[1px] h-4"></div>
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
        class="w-4 h-4 opacity-70"
      >
        <path d="M8 2v4"></path>
        <path d="M16 2v4"></path>
        <rect width="18" height="18" x="3" y="4" rx="2"></rect>
        <path d="M3 10h18"></path>
        <path d="M8 14h.01"></path>
        <path d="M12 14h.01"></path>
        <path d="M16 14h.01"></path>
        <path d="M8 18h.01"></path>
        <path d="M12 18h.01"></path>
        <path d="M16 18h.01"></path>
      </svg>
      Updated April 2023
    </div>
  </div>
</div>

*/
