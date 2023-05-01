// morgan
const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('combined'));
app.use(morgan('common'));
app.use(morgan(':method + :date'));
app.use(morgan(':status + :url'));
app.use((req, res) => {
    res.send('express morgan');
});

app.listen(3000, ()=>{
    console.log('Server Start');
})