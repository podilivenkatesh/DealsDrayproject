import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
  try {
    console.log(process.env.MONGO_URI as string);
    await mongoose.connect("mongodb://localhost:27017/employee");
    console.log('MongoDB connected...');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

export default connectDB;
