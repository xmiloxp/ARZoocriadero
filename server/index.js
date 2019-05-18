const express = require('express');
const next = require ('next');

const PORT = process.env.PORT || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app
    .prepare()
    .then(() =>{
        const server = express();
        const showRoutes = require('./routes/route.animals.js');
        const bd = require('./database')
        server.use('/api/animals', showRoutes);

        server.get('*', (req, res) => {
            return handle(req,req);
        });

        server.listen(PORT, err => {
            if (err) throw err;
            console.log(`> Ready on ${PORT}`)
        } )
    })
    .catch(ex =>{
        console.error(ex.stack);
        process.exit(1);
    })