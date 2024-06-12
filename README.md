# Facebook Messenger AI Bot

This project implements a simple Facebook Messenger AI Bot using Node.js and Express. The bot is capable of handling Facebook webhook validation and processing incoming messages.

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js
- npm (Node Package Manager)
- ngrok (for local development and testing)

## Getting Started

Follow these instructions to set up and run the project on your local machine.

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/facebook-messenger-ai-bot.git
   cd facebook-messenger-ai-bot

# Install the dependencies:
```sh
npm install
```

# Configuration
Create a .env file in the root directory and add your Facebook Page Access Token and Verify Token:
```sh

PAGE_ACCESS_TOKEN=your_page_access_token
VERIFY_TOKEN=ABCDEFGHIJKLMNOPQRSTUVWXYZ
```
# Running the Server
## Start the Node.js server:
```sh
node webhook.js
```
## Expose your local server using ngrok:
```sh
ngrok http 4000
```
## Copy the HTTPS URL provided by ngrok. It will look something like this:
```sh
https://8499-102-135-169-112.ngrok-free.app
```
# Facebook App Configuration
Go to your Facebook App Dashboard and navigate to the Messenger section.

In the Webhook configuration, set the Callback URL to:
```sh
https://8499-102-135-169-112.ngrok-free.app/webhook
```
Set the Verify Token from webhook.js

Subscribe to the following Webhook events: messages and messaging_postbacks.

Project Structure
webhook.js: Main server file that handles Facebook webhook verification and message processing.
package.json: Project metadata and dependencies.
Code Overview
The server listens on port 4000 or the port defined in the environment variable PORT.
It handles Facebook validation in the /webhook GET route.
It processes incoming messages in the /webhook POST route and sends a response using the sendMessage function.
Example of Handling Messages
The sendMessage function logs the received message and sends a response back to the user.

JavaScript

function sendMessage(event) {
  const senderId = event.sender.id;
  const messageText = event.message.text;

  console.log(`Received message from ${senderId}: ${messageText}`);

  const responseMessage = {
    text: `You sent the message: "${messageText}". Now let's echo it back to you!`
  };

  sendTextMessage(senderId, responseMessage);
}

function sendTextMessage(recipientId, message) {
  console.log(`Sending message to ${recipientId}: ${JSON.stringify(message)}`);
}
AI-generated code. Review and use carefully. More info on FAQ.
Contributing
Feel free to contribute to this project by submitting issues or pull requests.

License
This project is licensed under the MIT License.

Acknowledgements
Facebook Messenger Platform Documentation
Express.js Documentation
