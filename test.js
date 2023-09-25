const http = require('https');

const options = {
  method: 'GET',
  hostname: 'imdb8.p.rapidapi.com',
  port: null,
  path: '/auto-complete?q=game%20of%20thr',
  headers: {
    'X-RapidAPI-Key': '71cb1d31f2msh464c31a401f9ff8p187416jsn6bb0b60c82eb',
    'X-RapidAPI-Host': 'imdb8.p.rapidapi.com',
  },
};

const req = http.request(options, function (res) {
  const chunks = [];

  res.on('data', function (chunk) {
    chunks.push(chunk);
  });

  res.on('end', function () {
    const body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.end();
