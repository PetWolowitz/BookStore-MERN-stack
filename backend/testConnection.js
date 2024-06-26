import mongoose from 'mongoose';
import { mongoDBURL } from './config.js';

mongoose.connect(mongoDBURL)
    .then(() => {
        console.log('MongoDB connected successfully');
        process.exit(0);
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1);
    });
