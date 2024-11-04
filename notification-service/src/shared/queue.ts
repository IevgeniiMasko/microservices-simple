import { channel } from '../lib/rabbitmq';

export const publish = async (queueName: string, message: string) => {
  if (!channel) throw new Error('RabbitMQ channel is not established');
  await channel.assertQueue(queueName);
  channel.sendToQueue(queueName, Buffer.from(message));
};
