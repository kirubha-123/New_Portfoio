import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import projects from './data/projects.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running' });
});

app.get('/api/projects', (req, res) => {
  res.json(projects);
});

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log(`Received message from ${name} (${email}): ${message}`);
  // In a real app, send an email or save to DB here
  res.status(200).json({ success: true, message: 'Message received successfully!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
