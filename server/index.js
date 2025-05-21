import express from 'express';
import dotenv from 'dotenv';
import connect from './config/db.js';
import policyRoutes from './routes/policyRoutes.js'

dotenv.config();

const app = express();

const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.get('/', (req,res) => {
    res.send('PulseCheck');
});

app.use('/api/policies',policyRoutes)

app.listen(PORT, () => {
    console.log(`This app running on port:${PORT}`);
    connect();
})