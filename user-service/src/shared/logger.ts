import {
  createLogger,
  format,
  transports,
  Logger as WinstonLogger,
} from 'winston';

const winstonlogger = createLogger({
  level: 'info',
  format: format.combine(format.timestamp(), format.simple()),
  transports: [new transports.Console()],
});

class Logger {
  private logger: WinstonLogger = winstonlogger;

  log(message: string, data?: any): void {
    this.logger.info(message, data);
  }
  error(message: string, data?: any): void {
    this.logger.error(message, data);
  }
  warn(message: string, data?: any): void {
    this.logger.warn(message, data);
  }
}

export default new Logger();
