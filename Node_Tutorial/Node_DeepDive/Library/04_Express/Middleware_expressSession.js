const express = require('express');
const parseurl = require('parseurl');
const session = require('express-session');

const app = express();

app.use(session({
    secret: 'keyboard dog',
    resave: false,
    saveUninitialized: true,
}));

app.use((req, res, next)=>{
    if (!req.session.views) {
        req.session.views = {};
    }
    console.log(req.session);

    const pathname = parseurl(req).pathname;
    req.session.views[pathname] = (req.session.views[pathname] || 0) + 1;
    next();
});

app.get('/puddle', (req, res) => {
    res.send(`Hello puddle! you viewed this page ${req.session.views['/puddle']} times`);
});

app.get('/biggle', (req, res)=>{
    res.send(`Hello biggle! you viewed this page ${req.session.views['/biggle']} times`)
});

app.listen(3000, ()=>{
    console.log('Server start~');
});