import mongoose from 'mongoose';
import config from '../shared/config';
import logger from '../shared/logger';

export const connect = async () => {
  try {
    await mongoose.connect(config.mongodbUri);
    logger.log('MongoDB connected successfully');
  } catch (error) {
    logger.error('MongoDB connection failed:', error);
    process.exit(1);
  }
};
