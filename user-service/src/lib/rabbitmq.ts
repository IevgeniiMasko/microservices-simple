import amqp from 'amqplib';
import config from '../shared/config';
import logger from '../shared/logger';

export let channel: amqp.Channel;

export const connect = async () => {
  try {
    const connection = await amqp.connect(config.rabbitmqUrl);
    channel = await connection.createChannel();
    logger.log('RabbitMQ connected successfully');
  } catch (error) {
    logger.error('RabbitMQ connection failed', error);
    process.exit(1);
  }
};
