const React = require('react')
const ReactDom = require('react-dom')
const ReactDOMServer = require('react-dom/server')

import MainComponent from './components/main'
const Layout = require('./components/layout')


addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

const routes = {
  '/': <MainComponent />
}

/**
 * Fetch and log a request
 * @param {Request} request
 */
async function handleRequest(request) {
  const u = new URL(request.url);
  console.log(<MainComponent/>)
  let rendered = ReactDOMServer.renderToString(routes[u.pathname]);
  return new Response(Layout.header + rendered + Layout.footer, {
    headers: {
      "Content-Type": "text/html"
    }
  });
}
