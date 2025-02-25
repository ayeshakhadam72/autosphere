import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    const { name, email, number, address, deliveryLocation, returnLocation, pickupDate, pickupTime, returnDate, returnTime, checkAvailability, carName } = req.body;

    if (!name || !email || !number) {
        return res.status(400).json({ message: 'Missing required fields' });
    }

    try {
        // Nodemailer Transporter Setup
        const transporter = nodemailer.createTransport({
            service: 'gmail', // or use SMTP settings for other email providers
            auth: {
                user: "ayeshakhadam2@gmail.com",  // Set this in .env.local
                pass: "qpoh xhdo ckyv tzbl" ,  // Set this in .env.local
            },
        });

        // Email Content
        const mailOptions = {
            from:"ayeshakhadam2@gmail.com",
            to: "ayeshakhadam2@gmail.com", // Change this to your receiving email
            subject: 'New Booking Request',
            html: `
                <h2>New Booking Request</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone Number:</strong> ${number}</p>
                <p><strong>Address:</strong> ${address}</p>
                <p><strong>Car Name:</strong> ${carName}</p>
                <p><strong>Delivery Location:</strong> ${deliveryLocation}</p>
                <p><strong>Return Location:</strong> ${returnLocation}</p>
                <p><strong>Pickup Date:</strong> ${pickupDate} - <strong>Time:</strong> ${pickupTime}</p>
                <p><strong>Return Date:</strong> ${returnDate} - <strong>Time:</strong> ${returnTime}</p>
                <p><strong>Check Availability:</strong> ${checkAvailability}</p>
            `,
        };

        // Send Email
        await transporter.sendMail(mailOptions);

        return res.status(200).json({ message: 'Email sent successfully!' });

    } catch (error) {
        console.error('Error sending email:', error);
        return res.status(500).json({ message: 'Failed to send email' });
    }
}
