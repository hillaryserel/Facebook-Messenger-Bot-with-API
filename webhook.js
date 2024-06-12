const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const server = app.listen(process.env.PORT || 4000, () => {
  console.log('Express server listening on port %d in %s mode', server.address().port, app.settings.env);
});

/* For Facebook Validation */
app.get('/webhook', (req, res) => {
  if (req.query['hub.mode'] && req.query['hub.verify_token'] === 'your_token') {
    res.status(200).send(req.query['hub.challenge']);
  } else {
    res.status(403).end();
  }
});

/* Handling all messages */
app.post('/webhook', (req, res) => {
  console.log(req.body);
  if (req.body.object === 'page') {
    req.body.entry.forEach((entry) => {
      entry.messaging.forEach((event) => {
        if (event.message && event.message.text) {
          sendMessage(event);
        }
      });
    });
    res.status(200).end();
  }
});

// Define the sendMessage function
function sendMessage(event) {
  const senderId = event.sender.id;
  const messageText = event.message.text;

  // Implement your logic to handle the message
  console.log(`Received message from ${senderId}: ${messageText}`);

  // Example of sending a response message back
  const responseMessage = {
    text: `You sent the message: "${messageText}". Now let's echo it back to you!`
  };

  // Call a function to send the response message
  sendTextMessage(senderId, responseMessage);
}

function sendTextMessage(recipientId, message) {
  // Implement your logic to send a message to the user
  console.log(`Sending message to ${recipientId}: ${JSON.stringify(message)}`);
}
