import React from 'react';
import { renderToString } from 'react-dom/server';
import Home from '../client/components/Home';

export default()=> {
    const content = renderToString(<Home />);
    const html = `
        <head></head>
        <body>
            I am Html
            <div id="root">${content}</div>
            <script src="bundle.js"></script>
        </body>
    `;
    return html;
}
