import dotenv from 'dotenv';
dotenv.config();

const config = {
  port: process.env.PORT ? parseInt(process.env.PORT) : 3002,
  rabbitmqUrl: process.env.RABBITMQ_URL || 'amqp://localhost',
};

export default config;
