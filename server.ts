// server.ts
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import formRoutes from './routes/formRoutes';

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://bhushan:TWnvzLxSWRFwcrhn@cluster0.kitel5l.mongodb.net/?retryWrites=true&w=majority');

app.use('/api/forms', formRoutes);

const PORT = 5000;

app.listen(PORT, () => {
     console.log(`Server is running on port ${PORT}`);
});
