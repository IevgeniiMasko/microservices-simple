import { channel } from '../lib/rabbitmq';
import logger from '../shared/logger';

export const initUserNotificationConsumer = () => {
  const queue = 'user';
  channel.assertQueue(queue, { durable: true });

  logger.log('Waiting for messages in queue:', queue);

  channel.consume(queue, (msg) => {
    try {
      if (msg) {
        const content = msg.content.toString();
        const notification = JSON.parse(content);

        if (notification.action === 'create') {
          logger.log(`Welcome ${notification.user.name}`);
        } else if (notification.action === 'delete') {
          logger.log(`User: ${notification.user.name} has been deleted`);
        }
        channel.ack(msg);
      }
    } catch (error) {
      logger.error(`queue ${queue} error`, error);
    }
  });
};
