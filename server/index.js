import express from 'express';
import dotenv from 'dotenv';
import connect from './config/db.js';

dotenv.config();

const app = express();

const PORT = process.env.PORT;

app.get('/', (req,res) => {
    res.send('PulseCheck');
});

app.listen(PORT, () => {
    console.log(`This app running on port:${PORT}`);
    connect();
})