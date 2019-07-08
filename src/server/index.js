import express from 'express'
import path from 'path'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import Home from '../client/pages/Home';
import HomeNoHydrate from '../client/pages/HomeNoHydrate';
import App from '../client/App';
import template from './template';

const app = express()

app.use('/static', express.static(path.resolve(__dirname, 'public')))

app.get('/', (req, res) => {

  Home.getInitialProps().then(
    response => {
      const component = ReactDOMServer.renderToString(
        <App initialProps={response} >
          <Home />
        </App>
      );
      const html = template(response, component);

      res.send(html);
    }
  );
});

app.get('/withoutHydration', (req, res) => {
  Home.getInitialProps().then(
    response => {
      const component = ReactDOMServer.renderToString(
        <App initialProps={response} >
          <HomeNoHydrate />
        </App>
      );
      const html = template(response, component);

      res.send(html);
    }
  );
});

app.listen(3000);
console.log('server listening on port 3000');