const asyncHandler = require('express-async-handler');
const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

const sendContactEmail = asyncHandler(async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    phone,
    message
  } = req.query.formData;
  const { data, error } = await resend.emails.send({
    from: 'Adventurist Israel <adventurist@resend.dev>',
    to: ['itairotstein@gmail.com'],
    subject: 'Website Contact Form',
    html: `
    <p>First Name: ${firstName}</p>
    <p>Last Name: ${lastName}</p>
    <p>Email: ${email}</p>
    <p>Phone: ${phone}</p>
    <p>Message: ${message}</p>
    `,
  });

  if (error) {
    return res.status(400).json({ error });
  }

  res.status(200).json({ data });
});

module.exports = {
  sendContactEmail
};
