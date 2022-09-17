import express from 'express';
import bodyParser from 'body-parser';
import userRoute from './routes/users.js';



const app = express();
const PORT = 4000;

app.use(bodyParser.json());

app.use('/users', userRoute);

app.get('/', (req, res) => res.send('Hello from homepage'));

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));


