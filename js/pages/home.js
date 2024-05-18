import { goTo } from '../router';

function render(elem) {
    elem.classList.add(
        'flex',
        'items-center',
        'justify-center',
        'bg-black',
        'text-white',
        'h-screen'
    );

    const container = document.createElement('div');
    container.classList.add('flex-1', 'py-12', 'sm:py-16', 'lg:py-20');
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
    title1.textContent = 'Hi, my name is';
    leftColumn.appendChild(title1);

    const title2 = document.createElement('h1');
    title2.classList.add('text-7xl', 'font-extrabold', 'text-white');
    title2.textContent = 'André Marques';
    leftColumn.appendChild(title2);

    const title3 = document.createElement('h1');
    title3.classList.add('text-2xl', 'font-bold', 'tracking-tight', 'sm:text-5xl');
    leftColumn.appendChild(title3);

    const span = document.createElement('span');
    span.id = 'animate';
    title3.appendChild(span);

    const rightColumn = document.createElement('div');
    rightColumn.classList.add('relative', 'h-72');
    grid.appendChild(rightColumn);

    const image = document.createElement('img');
    image.src = './assets/final-class.jpg';
    image.alt = 'Me teaching a class at Code For all';
    image.classList.add('absolute', 'inset-0', 'h-full', 'w-full', 'object-contain', 'rounded-lg');
    image.width = 1200;
    image.height = 900;
    image.style.aspectRatio = '1200 / 900';
    image.style.objectFit = 'cover';
    rightColumn.appendChild(image);

    addAnimation(elem);

    const contactButton = document.createElement('button');
    contactButton.classList.add(
        'mt-8',
        'px-4',
        'py-2',
        'text-lg',
        'font-semibold',
        'text-white',
        'bg-red-500',
        'rounded-lg',
        'hover:bg-red-700',
        'focus:outline-none',
        'focus:ring-2',
        'focus:ring-red-500',
        'focus:ring-offset-2',
        'focus:ring-offset-black'
    );
    contactButton.textContent = 'Contact me';
    contactButton.addEventListener('click', () => {
        goTo('/contact');
    });
    innerContainer.appendChild(contactButton);
}

function addAnimation(elem) {
    const animate = elem.querySelector('#animate');
    animate.classList.add('text-red-500');
    animate.style.fontWeight = 'bold';
    animate.style.borderRight = '2px solid #fff';
    animate.style.animation = 'blinkingCursor 0.7s step-end infinite';
    animate.style.whiteSpace = 'nowrap';
    animate.style.overflow = 'hidden';
    animate.style.width = 'fit-content';

    const style = document.createElement('style');
    style.innerHTML = blinkingCursor();
    elem.appendChild(style);

    const words = [
        'FullStack Developer',
        'Teacher',
        'JavaScript Dev.',
        'Java Dev.',
        'React.js Dev.',
        'Node.js Dev.',
        'Mentor',
        'Dancer',
        'AKA NOZK',
        'Speaker',
        'Tech Enthusiast',
        'Learner'
    ];

    let index = 0;
    let wordIndex = 0;
    let currentWord = words[wordIndex];
    let currentText = '';

    function type() {
        if (index < currentWord.length) {
            currentText += currentWord[index];
            animate.innerHTML = currentText;
            index++;
            setTimeout(type, 200);
        } else {
            setTimeout(erase, 1000);
        }
    }

    function erase() {
        if (index > 0) {
            currentText = currentWord.substring(0, index - 1);
            animate.innerHTML = currentText;
            index--;
            setTimeout(erase, 200);
        } else {
            wordIndex++;
            if (wordIndex >= words.length) {
                wordIndex = 0;
            }
            currentWord = words[wordIndex];
            setTimeout(type, 500);
        }
    }

    type();
}

function blinkingCursor() {
    return `
      @keyframes blinkingCursor {
        from, to {
          border-color: transparent;
        }
        50% {
          border-color: #fff;
        }
      }
    `;
}

export { render };
