const admin = require('firebase-admin');
const express = require('express');
const app = express();

var serviceAccount = require('./sell-me-6e72d-firebase-adminsdk-jgwx9-c0ea228760.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

app.use(express.json());

app.post('/send-notification', (req, res) => {
  console.log('request body',req.body);
  // const message = {
  //   notification: {
  //     title: 'new ad',
  //     body: 'new ad posted',
  //   },
  //   token:
  //     'd205gaQ4RJaZ9qxMeAQ4Sg:APA91bFXHTFoPiVYn3IfPztGqg8THJBBqzwvALUB_6kRnTsa98dBkCeb9aTA_03M2G8jRgwcr7yIXUJb_ozk0I04IRlWjWk8sw60iZ1EcMO75o25ME6xk6Da5pXwjcS2cViKmpGtopGy',
  // };

  // admin
  //   .messaging()
  //   .send(message)
  //   .then(notificationRes => {
  //     console.log('notificationRes', notificationRes);
  //   });
});

app.listen(3000, () => console.log('server running'));
