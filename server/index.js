import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import cors from "cors"

const app = express();

app.use(cors())
app.use(express.json());


// Dummy database
const users = [{
    email:'yassin@gmail.com',
    password:'$2a$10$RJ3ch/IRrb8goSGlcC8Br.VjA/qHH1uKpmt/NYKIYHOZp2CejpkI6'//pass123
}];

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) return res.sendStatus(401);

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
}

app.post('/register', async (req, res) => {
    const { email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    users.push({ email, password: hashedPassword });
    res.status(201).send('User registered');
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = users.find(u => u.email === email);
    if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(400).send('Invalid credentials');
    }

    const token = jwt.sign(
        { userId: user.id },
       'your_jwt_secret',
        { expiresIn: '24h' }
    );

    res.json({ token });
});

// Apply authenticateToken middleware to all routes starting with /api/protected
app.use('/api/protected', authenticateToken);

app.get('/api/protected/user', (req, res) => {
    // This route is now protected
    res.json({ message: "User details", user: req.user });
});

app.get('/api/protected/settings', (req, res) => {
    // This route is also protected
    res.json({ message: "User settings", user: req.user });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT} 😎`));
