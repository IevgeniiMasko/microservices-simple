import logger from './shared/logger';
import { rabbitmq } from './lib';
import { initUserNotificationConsumer } from './api/consumer';

process.on('uncaughtException', function (error) {
  logger.error('server: uncaught exception', error);
  process.exit(1);
});

process.on('unhandledRejection', (reason, promise) => {
  logger.error(`server: unhandled promise rejection: ${promise}: ${reason}`);
  process.exit(1);
});

const start = async () => {
  await rabbitmq.connect();

  initUserNotificationConsumer();
};

start();
