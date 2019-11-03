const functions = require('firebase-functions');

exports.hello = functions
  .region('asia-northeast1')
  .https.onRequest((request, response) => {
    // Using query
    const name = request.query.name || 'defaultName';
    // Return alert js
    response
      .contentType('application/javascript; charset=utf-8')
      .send(`alert('Hello ${name}')`);
  });
