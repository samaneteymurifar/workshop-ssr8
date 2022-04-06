import React from 'react';
import { renderToString } from 'react-dom/server';
import Home from '../client/components/Home';
import { StaticRouter } from 'react-router-dom';
import Routes from '../client/Routes';


export default(req)=> {
    const content = renderToString(
        <StaticRouter location={req.path} context ={{}}>
            <Routes/>
        </StaticRouter>
    )
    const html = `
        <head></head>
        <body>
            I am Html
            <div id="root">${content}</div>
            <script>
               var exports = {}; // defining an empty exports object is that common workaround
            </script>
            <script src="bundle.js"></script>
        </body>
    `;
    return html;
}
