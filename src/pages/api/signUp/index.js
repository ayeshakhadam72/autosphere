import fs from 'fs';
import path from 'path';
import bcrypt from 'bcryptjs';  // Install bcryptjs if not done already

const filePath = path.join(process.cwd(), 'data', 'users.json');

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { username, password, email, name, age } = req.body;

        // Validate fields
        if (!username || !password || !email || !name || !age) {
            return res.status(400).json({ message: "All fields are required!" });
        }

        // Read existing data
        let users = [];
        if (fs.existsSync(filePath)) {
            const fileData = fs.readFileSync(filePath, 'utf8');
            users = fileData ? JSON.parse(fileData) : [];
        }

        // Check if user already exists
        if (users.some(user => user.email === email)) {
            return res.status(400).json({ message: "User already exists!" });
        }

        // Hash the password before storing it
        const hashedPassword = await bcrypt.hash(password, 10);

        // Add new user
        const newUser = { username, password: hashedPassword, email, name, age };
        users.push(newUser);
        // Save data to JSON file
        try {
            fs.writeFileSync(filePath, JSON.stringify(users, null, 2), 'utf8');
        } catch (error) {
            return res.status(500).json({ message: "Error saving user data." });
        }

        return res.status(201).json({ message: "User registered successfully!", user: newUser });
    } else {
        // If the request method is not POST
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}
