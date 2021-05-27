const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  const items = [
    { title: 'D', message: 'evelopment a Good Service' },
    { title: 'E', message: 'JS use JS to render HTML' },
    { title: 'M', message: 'ust use Express' },
    { title: 'A', message: 'wesome' },
    { title: 'I', message: 's beatiful' },
    { title: 'S', message: 'o easy' },
  ];

  const subtitle = "EJS is a simple templating language that lets you generate HTML markup with plain JavaScript."
  res.render('index', {
    qualities: items,
    subtitle: subtitle
  });
});

app.get('/about', function (req, res) {
  res.render('page/about');
});

app.listen(8080);
console.log('Server initialized');
