import React from 'react';
import { createRoot } from 'react-dom/client';
import AboutMe from '../jsx-components/about-me.jsx';

function render(elem) {
    // Render your React component instead
    elem.className = 'h-full';
    const root = createRoot(elem);
    root.render(<AboutMe />);
}

export { render };
