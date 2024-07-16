import postmark from 'postmark';


//Initialize the Postmark client
const client = new postmark.ServerClient(process.env.POSTMARK_API_KEY);

export default async function sendEmail(req, res) {
    if (req.method === 'POST') {
        const { email, name, message } = req.body;

        try {
            await client.sendEmail({
                From: 'mario.rubio-calvo@brandung.de',
                To: 'mario.rubio.c@gmail.com',
                Subject: `New message from ${name} (${email})`,
                TextBody: message
            });

            res.status(200).json({ message: 'Email sent successfully' });
        } catch (error) {
            res.status(500).json({ error: 'Failed to send email' });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}