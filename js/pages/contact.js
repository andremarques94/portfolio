async function handleSubmit(event) {
    event.preventDefault();
    const email = document.querySelector('#email').value;
    const subject = event.target.form.querySelector('#subject').value;
    const message = event.target.form.querySelector('#message').value;

    await sendEmail(email, subject, message);

    event.target.form.reset();
}

async function sendEmail(email, subject, text) {
    const data = {
        email,
        subject,
        text
    };

    console.log(JSON.stringify(data));

    const answer = await fetch('https://personal-webapp-backend-production.up.railway.app/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    if (answer.ok) {
        alert('Email sent');
    } else {
        alert('Error sending email');
    }
}

function render(elem) {
    elem.classList.add(
        'flex',
        'justify-center',
        'items-center',
        'bg-black',
        'text-white',
        'h-screen'
    );

    elem.appendChild(emailForm());
}

function emailForm() {
    const section = document.createElement('section');
    section.classList.add('bg-black', 'dark:bg-gray-900', 'rounded-lg');
    const div = document.createElement('div');
    div.classList.add('py-8', 'lg:py-16', 'px-4', 'mx-auto', 'max-w-screen-md');
    const h2 = document.createElement('h2');
    h2.classList.add(
        'mb-4',
        'text-4xl',
        'tracking-tight',
        'font-extrabold',
        'text-center',
        'text-gray-900'
    );
    h2.innerHTML = `Let's get in touch`;
    const p = document.createElement('p');
    p.classList.add('mb-8', 'lg:mb-16', 'font-light', 'text-center', 'text-gray-500', 'sm:text-xl');
    p.innerHTML = `Want to work together? Have a question? Just want to say hi? Send me an email`;
    const form = document.createElement('form');
    form.action = '#';
    form.method = 'POST';
    form.classList.add('space-y-8');
    const div1 = document.createElement('div');
    const label1 = document.createElement('label');
    label1.classList.add(
        'block',
        'mb-2',
        'text-sm',
        'font-medium',
        'text-gray-900',
        'dark:text-gray-300'
    );
    label1.innerHTML = 'Your email';
    const input1 = document.createElement('input');
    input1.type = 'email';
    input1.id = 'email';
    input1.classList.add(
        'shadow-sm',
        'bg-gray-50',
        'border',
        'border-gray-300',
        'text-gray-900',
        'text-sm',
        'rounded-lg',
        'focus:ring-primary-500',
        'focus:border-primary-500',
        'block',
        'w-full',
        'p-2.5',
        'dark:bg-gray-700',
        'dark:border-gray-600',
        'dark:placeholder-gray-400',
        'dark:text-white',
        'dark:focus:ring-primary-500',
        'dark:focus:border-primary-500',
        'dark:shadow-sm-light'
    );
    input1.placeholder = 'name@email.com';
    input1.required = true;
    div1.appendChild(label1);
    div1.appendChild(input1);
    const div2 = document.createElement('div');
    const label2 = document.createElement('label');
    label2.classList.add(
        'block',
        'mb-2',
        'text-sm',
        'font-medium',
        'text-gray-900',
        'dark:text-gray-300'
    );
    label2.innerHTML = 'Subject';
    const input2 = document.createElement('input');
    input2.type = 'text';
    input2.id = 'subject';
    input2.classList.add(
        'block',
        'p-3',
        'w-full',
        'text-sm',
        'text-gray-900',
        'text-gray-900',
        'text-sm',
        'rounded-lg',
        'focus:ring-primary-500',
        'focus:border-primary-500',
        'block',
        'w-full',
        'p-2.5',
        'dark:bg-gray-700',
        'dark:border-gray-600',
        'dark:placeholder-gray-400',
        'dark:text-white',
        'dark:focus:ring-primary-500',
        'dark:focus:border-primary-500',
        'dark:shadow-sm-light'
    );
    input2.placeholder = 'Subject';
    input2.required = true;
    div2.appendChild(label2);
    div2.appendChild(input2);
    const div3 = document.createElement('div');
    const label3 = document.createElement('label');
    label3.classList.add(
        'block',
        'mb-2',
        'text-sm',
        'font-medium',
        'text-gray-900',
        'dark:text-gray-300'
    );
    label3.innerHTML = 'Message';
    const textarea = document.createElement('textarea');
    textarea.id = 'message';
    textarea.classList.add(
        'block',
        'p-3',
        'w-full',
        'text-sm',
        'text-gray-900',
        'text-gray-900',
        'text-sm',
        'rounded-lg',
        'focus:ring-primary-500',
        'focus:border-primary-500',
        'block',
        'w-full',
        'p-2.5',
        'dark:bg-gray-700',
        'dark:border-gray-600',
        'dark:placeholder-gray-400',
        'dark:text-white',
        'dark:focus:ring-primary-500',
        'dark:focus:border-primary-500',
        'dark:shadow-sm-light'
    );
    textarea.placeholder = 'Your message here';
    textarea.required = true;
    div3.appendChild(label3);
    div3.appendChild(textarea);
    const button = document.createElement('button');
    button.type = 'submit';

    button.classList.add(
        'bg-red-500',
        'transition-colors',
        'duration-800',
        'ease-in-out',
        'hover:bg-red-500',
        'text-white',
        'font-medium',
        'rounded-lg',
        'w-full',
        'p-3',
        'text-sm',
        'uppercase',
        'focus:outline-none',
        'focus:ring-2',
        'focus:ring-primary-500',
        'focus:ring-offset-2',
        'dark:bg-red-800',
        'dark:hover:bg-primary-600',
        'dark:focus:ring-primary-500',
        'dark:focus:ring-offset-2'
    );
    button.innerHTML = 'Send Message';
    form.appendChild(div1);
    form.appendChild(div2);
    form.appendChild(div3);
    form.appendChild(button);
    div.appendChild(h2);
    div.appendChild(p);
    div.appendChild(form);
    section.appendChild(div);

    button.addEventListener('click', handleSubmit);

    return section;
}

export { render };
