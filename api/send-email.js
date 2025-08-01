import { Resend } from 'resend';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { name, lastname, phone, email, message } = req.body || {};

  if (!name || !lastname || !phone || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email format' });
  }

  const resend = new Resend(process.env.VITE_RESEND_API_KEY);

  try {
    await resend.emails.send({
      from: 'New email from website <onboarding@resend.dev>',
      to: 'asmaekirimov.avocat@gmail.com',
      subject: 'New email from website',
      html: `<h1>New email from website</h1><p>Name: ${name + ' ' + lastname}</p><p>Phone: ${phone}</p><p>Email: ${email}</p><p>Message: ${message}</p>`,
    });
    return res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Send error:', error?.response?.body || error.message);
    return res.status(500).json({ error: 'Error sending email' });
  }
}
