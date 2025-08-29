import nodemailer from "nodemailer";

const sendEmail = async (options) => {
  // Transporter setup
  const transporter = nodemailer.createTransport({
    service: "Gmail", // or "Outlook", "Yahoo", etc.
    auth: {
      user: process.env.EMAIL_USER, // your email
      pass: process.env.EMAIL_PASS, // your email password or App Password
    },
  });

  // Email options
  const mailOptions = {
    from: `"Flower Store" <${process.env.EMAIL_USER}>`,
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  // Send email
  await transporter.sendMail(mailOptions);
};

export default sendEmail;
