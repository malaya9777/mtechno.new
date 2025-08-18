const express = require('express');
const layout = require('express-ejs-layouts');
const path = require('path');
const ejs = require('ejs');
const app = express();
const port = 3000;

app.engine('html', ejs.renderFile);
app.set('layout', 'layout/layout.ejs');

app.use(layout);
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.set('views', path.join(__dirname, '/views'));
app.use('/css', express.static(path.join(__dirname,'./public/css')));
app.use('/assests', express.static(path.join(__dirname,'./public/assests')));
app.use('/js', express.static(path.join(__dirname,'./public/js')));
app.use('/sitemap', express.static(path.join(__dirname,'./public/sitemap')));


app.use('/', require('./routers/index'))

app.listen(port, console.log(`App is listening on ${port}`));






