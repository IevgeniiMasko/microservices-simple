import 'reflect-metadata';
import config from './shared/config';
import server from './server';
import logger from './shared/logger';
import { mongo, rabbitmq } from './lib';

process.on('uncaughtException', function (error) {
  logger.error('server: uncaught exception', error);
  process.exit(1);
});

process.on('unhandledRejection', (reason, promise) => {
  logger.error(`server: unhandled promise rejection: ${promise}: ${reason}`);
  process.exit(1);
});

const startServer = async () => {
  await mongo.connect();
  await rabbitmq.connect();

  server.listen(config.port, () => {
    logger.log(`Server listening on port:${config.port}`);
  });
};

startServer();
