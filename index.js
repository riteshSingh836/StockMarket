import express from 'express';
import applicationErrorMiddleware from './src/error-handler/applicationError.js';

const app = express();

app.use(express.json());

app.get('/', (req,res) => {
    res.send("Welcome to Stock market stimulated by a trading Bot.")
});

app.use(applicationErrorMiddleware);

export default app;