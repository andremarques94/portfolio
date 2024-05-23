import React from 'react';

export default function Component() {
    return (
        <>
            <section className="w-full py-14 flex justify-center bg-gray-100 dark:bg-gray-800">
                <div className="container grid items-center gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                            Background 🚀
                        </h2>
                        <div className="text-gray-500 dark:text-gray-400 md:text-xl">
                            <p className="text-gray-500 dark:text-gray-400 md:text-xl">
                                I discovered a passion for programming while studying
                                Electrotechnical Engineering at FCT UNL. After gaining some
                                university experience, I managed my own café, which provided
                                valuable business management skills.
                            </p>
                            <br></br>
                            <p className="text-gray-500 dark:text-gray-400 md:text-xl">
                                To fully immerse myself in programming, I enrolled in the Academia
                                de Código_ bootcamp. After completing the 14-week intensive program,
                                I was invited to join the company as an instructor.
                            </p>
                            <br></br>
                            <p className="text-gray-500 dark:text-gray-400 md:text-xl">
                                Over the past three years, I have taught over 200 students and
                                worked on internal software projects, using technologies in the
                                JavaScript ecosystem like React and Node.js, as well as Java.{' '}
                            </p>
                            <p className="text-gray-500 dark:text-gray-400 md:text-xl">
                                This role encompassed all aspects of a software developer&apos;s
                                responsibilities, solidifying my expertise and passion for the
                                field.
                            </p>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div className="flex justify-center">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                Skills & Technologies 💻
                            </h2>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="rounded-md bg-white p-4 shadow-sm dark:bg-gray-950">
                                <h3 className="text-lg font-semibold">Front-end</h3>
                                <ul className="mt-2 space-y-1 text-sm text-gray-500 dark:text-gray-400">
                                    <li>HTML && CSS</li>
                                    <li>JavaScript</li>
                                    <li>React</li>
                                    <li>jQuery</li>
                                    <li>Tailwind CSS</li>
                                    <li>Bootstrap</li>
                                </ul>
                            </div>
                            <div className="rounded-md bg-white p-4 shadow-sm dark:bg-gray-950">
                                <h3 className="text-lg font-semibold">Back-end</h3>
                                <ul className="mt-2 space-y-1 text-sm text-gray-500 dark:text-gray-400">
                                    <li>Java</li>
                                    <li>Node.js</li>
                                    <li>Express</li>
                                    <li>Spring</li>
                                    <li>Hibernate</li>
                                    <li>mySQL</li>
                                    <li>postgreSQL</li>
                                </ul>
                            </div>
                            <div className="rounded-md bg-white p-4 shadow-sm dark:bg-gray-950">
                                <h3 className="text-lg font-semibold">Other</h3>
                                <ul className="mt-2 space-y-1 text-sm text-gray-500 dark:text-gray-400">
                                    <li>Git</li>
                                    <li>Github</li>
                                    <li>jUnit</li>
                                    <li>Mockito</li>
                                    <li>Maven</li>
                                    <li>Tomcat</li>
                                    <li>RESTful APIs</li>
                                    <li>Agile Methodologies</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full py-8 md:py-16 lg:py-24">
                <div className="container grid items-center gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                            Interests 🎉
                        </h2>
                        <p className="text-gray-500 dark:text-gray-400 md:text-xl">
                            When I&apos;m not coding, you can find me dancing—I was a professional
                            popping dancer and still love to dance, especially at dance battles. I
                            also enjoy building apps for fun, experimenting with new technologies,
                            and continuously learning new things.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="rounded-md bg-white p-4 shadow-sm dark:bg-gray-950">
                            <BackpackIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                            <h3 className="mt-2 text-lg font-semibold">Song digging</h3>
                        </div>
                        <div className="rounded-md bg-white p-4 shadow-sm dark:bg-gray-950">
                            <BookIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                            <h3 className="mt-2 text-lg font-semibold">Reading</h3>
                        </div>
                        <div className="rounded-md bg-white p-4 shadow-sm dark:bg-gray-950">
                            <PlaneIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                            <h3 className="mt-2 text-lg font-semibold">Traveling</h3>
                        </div>
                        <div className="rounded-md bg-white p-4 shadow-sm dark:bg-gray-950">
                            <ActivityIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                            <h3 className="mt-2 text-lg font-semibold">Dancing</h3>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

function ActivityIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" />
        </svg>
    );
}

function BackpackIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M9 17V5l12-2v12" />
            <circle cx="6" cy="18" r="3" />
            <circle cx="18" cy="16" r="3" />
        </svg>
    );
}

function BookIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
        </svg>
    );
}

function PlaneIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
        </svg>
    );
}
