// import express from 'express';
// import connectDB from './config/db';
// import bodyParser from 'body-parser';
// import dotenv from 'dotenv';

// dotenv.config();

// const app = express();
// connectDB();

// app.use(bodyParser.json());

// app.use('/api/auth', require('./routes/auth').default);
// app.use('/api/employees', require('./routes/employee').default);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server started on port ${PORT}`));


import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import connectDB from './config/db';
import dotenv from 'dotenv';

import authRoutes from './routes/auth';
import employeeRoutes from './routes/employee';

dotenv.config();

const app = express();
connectDB();

app.use(cors()); // Add this line to enable CORS
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/employees', employeeRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
