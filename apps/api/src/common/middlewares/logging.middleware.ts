import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggingMiddleware implements NestMiddleware {
  constructor(private readonly logger: Logger) {}

  use(req: Request, res: Response, next: NextFunction) {
    const { ip, method, originalUrl } = req;

    res.on('close', () => {
      const { statusCode } = res;
      const contentLength = res.get('content-length');

      // TODO: Change log level depending on status code
      this.logger.log(
        `${method} ${originalUrl} ${statusCode} ${contentLength} - ${ip}`
      );
    });

    next();
  }
}
