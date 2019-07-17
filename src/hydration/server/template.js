const template = (initialProps, component) => {
    return `<!doctype html>
    <html>
        <head>
        <script>window.__INITIAL__DATA__ = ${JSON.stringify({ ...initialProps })}</script>
        </head>
        <body>
            <div id="root">${component}</div>
            <script src="/static/client.js"></script>
        </body>
    </html>`
}

export default template;