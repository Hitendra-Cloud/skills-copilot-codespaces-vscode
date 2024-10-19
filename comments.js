// Create web server
// Create a route for POST /comments
// Read the body of the request
// Add the comment to the comments array
// Respond with a 201 status code
// Respond with the comment in the body of the response

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const comments = [];

app.post('/comments', (req, res) => {
  const comment = req.body.comment;
  comments.push(comment);
  res.status(201).send(comment);
});

app.listen(4001, () => {
  console.log('Listening on 4001');
});