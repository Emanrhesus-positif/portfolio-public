const sendMail = require('../middleware/mail');

exports.sendFormDataInMail = async (req, res) => {
  const { name, email, message } = req.body;

  try {
    await sendMail({
      from: 'portfolio-contact@emanrhesus.fr',
      to: 'romain.bories09@gmail.com',
      subject: `New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`,
    });

    res.status(200).json({ message: 'Email sent successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'There was an error sending the email.' });
  }
};