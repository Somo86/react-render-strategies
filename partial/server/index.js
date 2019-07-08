import express from 'express'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import Home from '../views/Home';
import fetch from '../../services/fetch';

const path = require('path');
const app = express();

app.use('/static', express.static(path.resolve(__dirname, 'public')))

app.get('/', (req, res) => {

    fetch('https://pokeapi.co/api/v2/pokemon/').then(response => {
        response.json().then(data => {
            const component = ReactDOMServer.renderToString(<Home list={data.results} />);

            res.send(
                `<!doctype html>
                    <html>
                        <head>
                        </head>
                        <body>
                            <div id="root">${component}</div>
                            <script src="/static/client.js"></script>
                        </body>
                </html>`);
        });
    });
});

app.listen(3000);
console.log('server listening on port 3000');