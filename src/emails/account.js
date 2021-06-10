const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);
msg = {};

const sendWelcomeEmail = (email, name) => {
  msg = {
    to: email,
    from: 'maxbajaj0242@gmail.com',
    subject: 'Welcome to app',
    text: `Thanks for joining the team, ${name}!`,
  };

  sgMail
    .send(msg)
    .then(() => {})
    .catch((error) => {
      console.error(error);
    });
};

const sendCancelEmail = (email, name) => {
  msg = {
    to: email,
    from: 'maxbajaj0242@gmail.com',
    subject: 'Goodbye',
    text: `Sorry to know that you're leaving the team, ${name}!`,
  };

  sgMail
    .send(msg)
    .then(() => {})
    .catch((error) => {
      console.error(error);
    });
};

module.exports = {
  sendWelcomeEmail,
  sendCancelEmail,
};
