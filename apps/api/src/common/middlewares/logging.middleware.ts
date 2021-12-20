import { HttpStatus, Injectable, Logger, NestMiddleware } from '@nestjs/common';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggingMiddleware implements NestMiddleware {
  constructor(private readonly logger: Logger) {}

  use(req: Request, res: Response, next: NextFunction) {
    res.on('close', () => {
      const { statusCode } = res;
      const message = this.getLogMessage(req, statusCode);

      if (
        statusCode === HttpStatus.OK ||
        statusCode === HttpStatus.NO_CONTENT ||
        statusCode === HttpStatus.NOT_MODIFIED
      ) {
        this.logger.log(message);
      } else {
        this.logger.warn(message);
      }
    });

    next();
  }

  private getLogMessage(req: Request, statusCode: number): string {
    const { ip, method, originalUrl } = req;

    return `[${statusCode}] ${method} ${originalUrl} - ${ip}`;
  }
}
