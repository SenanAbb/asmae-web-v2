import { body, validationResult } from 'express-validator'; // Si quieres seguir usando express-validator, tienes que adaptarlo, o validar manualmente
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(import.meta.env.VITE_SENDGRID_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { name, lastname, phone, email, message } = req.body;

  // Validaciones básicas manuales (porque express-validator no funciona directamente)
  if (!name || !lastname || !phone || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  // Puedes agregar validación simple de email aquí también

  const msg = {
    to: import.meta.env.VITE_SENDGRID_EMAIL_TO,
    from: import.meta.env.VITE_SENDGRID_EMAIL_FROM,
    subject: `New message from ${name} ${lastname}`,
    html: `
      <h3>New message from ${name} ${lastname}</h3>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p>${message}</p>
    `,
  };

  try {
    await sgMail.send(msg);
    return res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Send error:', error?.response?.body || error.message);
    return res.status(500).json({ error: 'Error sending email' });
  }
}
