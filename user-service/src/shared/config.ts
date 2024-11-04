import dotenv from 'dotenv';
dotenv.config();

const config = {
  port: process.env.PORT ? parseInt(process.env.PORT) : 3001,
  mongodbUri: process.env.MONGODB_URI || 'mongodb://localhost:27017/userdb',
  rabbitmqUrl: process.env.RABBITMQ_URL || 'amqp://localhost',
};

export default config;
