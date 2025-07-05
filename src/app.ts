// app.ts
import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes';
import waitlistRoutes from './routes/waitlistRoutes';
import connectDB from './config/db';
import cors from 'cors';

dotenv.config();

const app = express();
const PORT: number = parseInt(process.env.PORT || '5000');


app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://mealverse.in', 'https://www.mealverse.in']
    : ['http://localhost:8080', 'http://localhost:3000'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization'],
}));


connectDB();


app.use(express.json());


app.get('/', (req, res) => {
  res.json({ 
    message: 'Mealverse API is running!',
    environment: process.env.NODE_ENV,
    timestamp: new Date().toISOString()
  });
});

// API Routes
app.use('/api/users', userRoutes);
app.use('/api', waitlistRoutes); 

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`🌍 Environment: ${process.env.NODE_ENV || 'development'}`);
});
